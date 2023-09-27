export async function handleFetch(request) {
  try {
    const data = await request();
    return data;
  } catch (error) {
    console.error(error);
  }
}
export async function handleFetchSuccessMessage(request) {
  try {
    const data = await request();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export function getFiltredMovies(keyword, movies) {
  const filtredMovies = movies.filter(
    (movie) =>
      movie.nameRU.toLowerCase().match(keyword.toLowerCase()) ||
      movie.nameEN.toLowerCase().match(keyword.toLowerCase()),
  );
  return filtredMovies;
}

export function getShortMovies(movies) {
  return movies.filter((movie) => movie.duration <= 40);
}
