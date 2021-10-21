import { useState } from "react";

const useUrlCheckbox = () => {
  const [urlCheckbox, setUrlCheckbox] = useState(true);

  const setTrueUrlCheckbox = () => setUrlCheckbox(true);
  const toggleUrlCheckbox = () => setUrlCheckbox(!urlCheckbox);

  return {
    urlCheckbox,
    setTrueUrlCheckbox,
    toggleUrlCheckbox,
  };
};

export default useUrlCheckbox;
