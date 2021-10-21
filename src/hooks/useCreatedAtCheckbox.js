import { useState } from "react";

const useCreatedAtCheckbox = () => {
  const [createdAtCheckbox, setCreatedAtCheckbox] = useState(true);

  const setTrueCreatedAtCheckbox = () => setCreatedAtCheckbox(true);
  const toggleCreatedAtCheckbox = () => setCreatedAtCheckbox(!createdAtCheckbox);

  return {
    createdAtCheckbox,
    setTrueCreatedAtCheckbox,
    toggleCreatedAtCheckbox,
  };
};

export default useCreatedAtCheckbox;