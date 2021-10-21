import { useState } from "react";

const useStateCheckbox = () => {
  const [stateCheckbox, setStateCheckbox] = useState(true);

  const setTrueStateCheckbox = () => setStateCheckbox(true);
  const toggleStateCheckbox = () => setStateCheckbox(!stateCheckbox);

  return {
    stateCheckbox,
    setTrueStateCheckbox,
    toggleStateCheckbox,
  };
};

export default useStateCheckbox;
