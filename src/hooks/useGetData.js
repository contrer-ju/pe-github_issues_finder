import { useState } from "react";

const useGetData = () => {
  const [getData, setGetData] = useState(false);
  const [dataGetted, setDataGetted] = useState(null);
  const [dataWordCloudGetted, setDataWordCloudGetted] = useState(null);
  const [responseCode, setResponseCode] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const setTrueGetData = () => setGetData(true);
  const setFalseGetData = () => setGetData(false);
  const setADataGetted = (value) => setDataGetted(value);
  const setADataWordCloudGetted = (value) => setDataWordCloudGetted(value);
  const setAResponseCode = (value) => setResponseCode(value);
  const setAResponseMessage = (value) => setResponseMessage(value);

  return {
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
  };
};

export default useGetData;
