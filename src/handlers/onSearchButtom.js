export default function onSearchButtom(
  phraseSearch,
  dataGetted,
  setAResultToShowArray
) {
  let resultsArray = [];
  let counter = 1;
  if (dataGetted !== null) {
    for (let i = 0; i < dataGetted.length; i++) {
      if (
        dataGetted[i]["title"]
          .toLowerCase()
          .includes(phraseSearch.toLowerCase())
      ) {
        let rowToShow = {
          number: counter++,
          state: dataGetted[i]["state"],
          created: dataGetted[i]["created"],
          title: dataGetted[i]["title"],
          body: dataGetted[i]["body"],
          url: dataGetted[i]["url"],
        };
        resultsArray.push(rowToShow);
      }
    }
    setAResultToShowArray(resultsArray);
  }
}
