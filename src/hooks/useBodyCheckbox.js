import { useState } from "react";

const useBodyCheckbox = () => {
  const [bodyCheckbox, setBodyCheckbox] = useState(true);

  const setTrueBodyCheckbox = () => setBodyCheckbox(true);
  const toggleBodyCheckbox = () => setBodyCheckbox(!bodyCheckbox);

  return {
    bodyCheckbox,
    setTrueBodyCheckbox,
    toggleBodyCheckbox,
  };
};

export default useBodyCheckbox;