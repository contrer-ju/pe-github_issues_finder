import { useEffect } from "react";
import axios from "axios";

import { githubToken } from "./constants/GithubToken";
import { baseURL } from "./constants/BaseURL";

import GithubInfoBox from "./components/GithubInfoBoxComponent";
import FieldsControlsBox from "./components/FieldsControlsBoxComponent";
import ResultsBox from "./components/ResultsBox";
import WordCloud from "./components/WordCloudComponet";

import onMappingData from "./handlers/onMappingData";
import onResponseMessage from "./handlers/onResponseMessage";
import onResetSearchButtom from "./handlers/onResetSearchButtom";
import onSearchButtom from "./handlers/onSearchButtom";

import useStateCheckbox from "./hooks/useStateCheckbox";
import useCreatedAtCheckbox from "./hooks/useCreatedAtCheckbox";
import useTitleCheckbox from "./hooks/useTitleCheckbox";
import useBodyCheckbox from "./hooks/useBodyCheckbox";
import useUrlCheckbox from "./hooks/useUrlCheckbox";
import useGitHubUser from "./hooks/useGitHubUser";
import useRepoUser from "./hooks/useRepoUser";
import useGetData from "./hooks/useGetData";
import usePhraseSearch from "./hooks/usePhraseSearch";
import useResultsSearch from "./hooks/useResultsSearch";

function App() {
  const { stateCheckbox, setTrueStateCheckbox, toggleStateCheckbox } =
    useStateCheckbox();
  const {
    createdAtCheckbox,
    setTrueCreatedAtCheckbox,
    toggleCreatedAtCheckbox,
  } = useCreatedAtCheckbox();
  const { titleCheckbox, setTrueTitleCheckbox, toggleTitleCheckbox } =
    useTitleCheckbox();
  const { bodyCheckbox, setTrueBodyCheckbox, toggleBodyCheckbox } =
    useBodyCheckbox();
  const { urlCheckbox, setTrueUrlCheckbox, toggleUrlCheckbox } =
    useUrlCheckbox();
  const { gitHubUser, setAGitHubUser } = useGitHubUser();
  const { repoUser, setARepoUser } = useRepoUser();
  const {
    getData,
    setTrueGetData,
    setFalseGetData,
    dataGetted,
    setADataGetted,
    dataWordCloudGetted,
    setADataWordCloudGetted,
    responseCode,
    setAResponseCode,
    responseMessage,
    setAResponseMessage,
  } = useGetData();
  const { phraseSearch, setAPhraseSearch } = usePhraseSearch();
  const { resultToShowArray, setAResultToShowArray } = useResultsSearch();

  useEffect(() => {
    if (getData) {
      setAResponseCode("");
      setAResponseMessage("Loading data...");
      axios
        .get(baseURL + gitHubUser + "/" + repoUser + "/issues", {
          headers: {
            Authorization: "token " + githubToken,
          },
        })
        .then((response) => {
          onMappingData(response.data, setADataGetted, setADataWordCloudGetted);
          onResponseMessage(
            response.status,
            setAResponseCode,
            setAResponseMessage
          );
        })
        .catch((error) =>
          onResponseMessage(
            error.response.status,
            setAResponseCode,
            setAResponseMessage
          )
        );
      setFalseGetData();
    }
  }, [
    getData,
    gitHubUser,
    repoUser,
    setADataGetted,
    setADataWordCloudGetted,
    setAResponseCode,
    setAResponseMessage,
    setFalseGetData,
  ]);

  return (
    <div
      className="d-flex justify-content-start align-items-center h-100"
      style={{ backgroundColor: "#282c34" }}
    >
      <div className="d-flex flex-column justify-content-start align-items-center h-100">
        <GithubInfoBox
          {...{
            gitHubUser,
            setAGitHubUser,
            repoUser,
            setARepoUser,
            responseCode,
            responseMessage,
            setTrueGetData,
            onResetSearchButtom,
            setTrueStateCheckbox,
            setTrueCreatedAtCheckbox,
            setTrueTitleCheckbox,
            setTrueUrlCheckbox,
            setTrueBodyCheckbox,
            setFalseGetData,
            setADataGetted,
            setADataWordCloudGetted,
            setAResponseCode,
            setAResponseMessage,
            setAPhraseSearch,
            setAResultToShowArray
          }}
        />
        <FieldsControlsBox
          {...{
            stateCheckbox,
            toggleStateCheckbox,
            createdAtCheckbox,
            toggleCreatedAtCheckbox,
            titleCheckbox,
            toggleTitleCheckbox,
            bodyCheckbox,
            toggleBodyCheckbox,
            urlCheckbox,
            toggleUrlCheckbox,
            phraseSearch,
            setAPhraseSearch,
            dataGetted,
            onSearchButtom,
            setAResultToShowArray,
          }}
        />
        <WordCloud {...{ dataWordCloudGetted }} />
      </div>
      <div className="overflow-auto h-100">
        <ResultsBox
          {...{
            stateCheckbox,
            createdAtCheckbox,
            titleCheckbox,
            bodyCheckbox,
            urlCheckbox,
            resultToShowArray,
          }}
        />
      </div>
    </div>
  );
}

export default App;
