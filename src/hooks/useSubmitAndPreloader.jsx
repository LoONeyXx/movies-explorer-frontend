import { useState } from "react";

function useSubmitAndPreloader() {
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  async function handleSubmit(request, message = "") {
    setIsLoading(true);
    try {
      await request();
      setSuccessMessage(message);
      setTimeout(() => setSuccessMessage(""), 2000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, setIsLoading, handleSubmit, successMessage };
}
export default useSubmitAndPreloader;
