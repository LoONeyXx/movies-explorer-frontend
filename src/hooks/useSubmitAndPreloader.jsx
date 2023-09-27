import { useState } from "react";

function useSubmitAndPreloader() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(request) {
    setIsLoading(true);
    try {
      await request();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, setIsLoading, handleSubmit };
}
export default useSubmitAndPreloader;
