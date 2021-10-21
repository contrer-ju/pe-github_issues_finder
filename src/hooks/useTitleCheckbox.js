import { useState } from "react";

const useTitleCheckbox = () => {
  const [titleCheckbox, setTitleCheckbox] = useState(true);

  const setTrueTitleCheckbox = () => setTitleCheckbox(true);
  const toggleTitleCheckbox = () => setTitleCheckbox(!titleCheckbox);

  return {
    titleCheckbox,
    setTrueTitleCheckbox,
    toggleTitleCheckbox,
  };
};

export default useTitleCheckbox;