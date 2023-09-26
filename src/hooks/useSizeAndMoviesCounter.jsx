import { useState, useEffect, useCallback } from "react";
import { moviesConfig } from "../constants/constants";
import {
  START_MOVIES_COUNTER_1280,
  START_MOVIES_COUNTER_768,
  START_MOVIES_COUNTER_320,
  NEXT_MOVIES_COUNTER_768,
  NEXT_MOVIES_COUNTER_1280,
  NEXT_MOVIES_COUNTER_320,
} from "../constants/constants";
function useSizeAndMoviesCounter(initialMovies = []) {
  const [moviesCounter, setMoviesCounter] = useState(moviesConfig);
  const [movies, setMovies] = useState(initialMovies);
  const [emptyResult, setEmptyResult] = useState("");
  const debounce = useCallback((callback, delay) => {
    let timeout;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(callback, delay);
    };
  }, []);

  const resetMovies = useCallback(() => {
    setMoviesCounter(moviesConfig);
    setMovies([]);
  }, []);

  const setNextMoviesCounter = useCallback(() => {
    if (
      moviesCounter.totalScore - moviesCounter.visibleMovies <
      moviesCounter.nextMoviesCounter
    ) {
      setMoviesCounter((prev) => ({
        ...prev,
        visibleMovies: moviesCounter.totalScore,
      }));
      return;
    }
    setMoviesCounter((prev) => ({
      ...prev,
      visibleMovies:
        moviesCounter.visibleMovies + moviesCounter.nextMoviesCounter,
    }));
  }, [
    moviesCounter.visibleMovies,
    moviesCounter.totalScore,
    moviesCounter.nextMoviesCounter,
  ]);

  function getStartAndNextCounters() {
    const size = document.documentElement.clientWidth;
    let startMoviesCounter;
    let nextMoviesCounter;
    if (size >= 1280) {
      startMoviesCounter = START_MOVIES_COUNTER_1280;
      nextMoviesCounter = NEXT_MOVIES_COUNTER_1280;
    } else if (size >= 768 && size < 1279) {
      startMoviesCounter = START_MOVIES_COUNTER_768;
      nextMoviesCounter = NEXT_MOVIES_COUNTER_768;
    } else if (size <= 767) {
      startMoviesCounter = START_MOVIES_COUNTER_320;
      nextMoviesCounter = NEXT_MOVIES_COUNTER_320;
    }
    return { startMoviesCounter, nextMoviesCounter };
  }

  useEffect(() => {
    checkSizeViewPort();
    // eslint-disable-next-line
  }, []);

  const checkSizeViewPort = useCallback(() => {
    const { startMoviesCounter, nextMoviesCounter } =
      getStartAndNextCounters();

    const isTotalCountLessThanStartCounter =
      moviesCounter.visibleMovies -
        (moviesCounter.visibleMovies % nextMoviesCounter) <
        0 || moviesCounter.totalScore < startMoviesCounter;

    const isVisibleMoviesCounterLessThanStartMoviesCounter =
      moviesCounter.visibleMovies < startMoviesCounter;
    const visibleMovies = isTotalCountLessThanStartCounter
      ? moviesCounter.totalScore
      : isVisibleMoviesCounterLessThanStartMoviesCounter
      ? startMoviesCounter
      : moviesCounter.visibleMovies -
        (moviesCounter.visibleMovies % nextMoviesCounter);
    setMoviesCounter((prev) => ({
      ...prev,
      startMoviesCounter,
      nextMoviesCounter,
      visibleMovies,
    }));
  }, [moviesCounter.totalScore, moviesCounter.visibleMovies]);

  const setStartMoviesCounter = useCallback((movies) => {
    if (movies.length === 0) {
      setEmptyResult("Ничего не найдено");
    } else {
      setEmptyResult("");
    }

    const { startMoviesCounter, nextMoviesCounter } =
      getStartAndNextCounters();
    const visibleMovies =
      startMoviesCounter > movies.length
        ? movies.length
        : startMoviesCounter;
    setMoviesCounter((prev) => ({
      ...prev,
      startMoviesCounter,
      nextMoviesCounter,
      totalScore: movies.length,
      visibleMovies,
    }));
  }, []);

  useEffect(() => {
    setMoviesCounter((prev) => ({
      ...prev,
      remainMovies:
        moviesCounter.totalScore - moviesCounter.visibleMovies <= 0
          ? 0
          : moviesCounter.totalScore - moviesCounter.visibleMovies,
    }));
  }, [moviesCounter.visibleMovies, moviesCounter.totalScore]);
  const initialRenderMovies = useCallback(
    (movies) => {
      setMovies(movies);
      setStartMoviesCounter(movies);
    },
    [setStartMoviesCounter],
  );

  useEffect(() => {
    window.addEventListener(
      "resize",
      debounce(checkSizeViewPort, 500),
    );
    return () => {
      window.removeEventListener(
        "resize",
        debounce(checkSizeViewPort, 500),
      );
    };
  }, [debounce, checkSizeViewPort]);

  return {
    moviesCounter,
    setMoviesCounter,
    setStartMoviesCounter,
    setNextMoviesCounter,
    initialRenderMovies,
    movies,
    setMovies,
    resetMovies,
    emptyResult,
    setEmptyResult,
  };
}
export default useSizeAndMoviesCounter;
