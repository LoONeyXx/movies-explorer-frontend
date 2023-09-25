import { useEffect, useState } from "react";

function useCurrentUser({ loggedIn }) {
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    _id: "",
  });

  useEffect(() => {
    if (!loggedIn) {
      resetUser();
    }
  }, [loggedIn]);

  function resetUser() {
    setCurrentUser({
      name: "",
      email: "",
      _id: "",
    });
  }

  return { currentUser, setCurrentUser, resetUser };
}
export default useCurrentUser;
