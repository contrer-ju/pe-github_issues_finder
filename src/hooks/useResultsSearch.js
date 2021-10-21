import { useState } from "react";

const useResultsSearch = () => {
  const [resultToShowArray, setResultToShowArray] = useState([]);

  const setAResultToShowArray = (value) => setResultToShowArray(value);

  return {
    resultToShowArray,
    setAResultToShowArray,
  };
};

export default useResultsSearch;
