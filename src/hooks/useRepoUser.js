import { useState } from "react";

const useRepoUser = () => {
  const [repoUser, setRepoUser] = useState("");

  const setARepoUser = (value) => setRepoUser(value);

  return {
    repoUser,
    setARepoUser,
  };
};

export default useRepoUser;