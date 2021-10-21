import { useState } from "react";

const usePhraseSearch = () => {
  const [phraseSearch, setPhraseSearch] = useState("");

  const setAPhraseSearch = (value) => setPhraseSearch(value);

  return {
    phraseSearch,
    setAPhraseSearch,
  };
};

export default usePhraseSearch;