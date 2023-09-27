import { useState } from "react";

function useFetchAndInfoTool(props) {
  const [successMessage, setSuccesMessage] = useState("");
  const [isLoading, setIsLoading] = useState("");

  async function handleFetch(request, successMessage) {
    setIsLoading(true);
    try {
      const data = await request();
      setSuccesMessage(successMessage);
      setTimeout(() => {
        setSuccesMessage("");
      }, 2000);
      return data;
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { successMessage, setSuccesMessage, handleFetch, isLoading };
}
export default useFetchAndInfoTool;
