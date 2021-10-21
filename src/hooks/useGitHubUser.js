import { useState } from "react";

const useGitHubUser = () => {
  const [gitHubUser, setGitHubUser] = useState("");

  const setAGitHubUser = (value) => setGitHubUser(value);

  return {
    gitHubUser,
    setAGitHubUser,
  };
};

export default useGitHubUser;