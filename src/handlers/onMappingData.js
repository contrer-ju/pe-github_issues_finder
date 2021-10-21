import { CommonWords } from "../constants/CommonWords";

export default function onMappingData(
  data,
  setADataGetted,
  setADataWordCloudGetted
) {
  let wordsCloudArray = [];
  let countsObject = {};
  let filterWordsArray = [];
  let wordsArray = [];
  let titlesArray = [];
  let issuesArray = [];

  for (let i = 0; i < data.length; i++) {
    let rowToStore = {
      state: data[i].state,
      created: data[i].created_at,
      title: data[i].title,
      body: data[i].body,
      url: data[i].html_url,
    };
    titlesArray.push(data[i].title);
    issuesArray.push(rowToStore);
  }

  for (let i = 0; i < titlesArray.length; i++) {
    let word = "";
    for (let j = 0; j < titlesArray[i].length; j++) {
      if (titlesArray[i][j] !== " ") {
        word = word + titlesArray[i][j];
        if (j === titlesArray[i].length - 1) wordsArray.push(word);
      } else {
        wordsArray.push(word);
        word = "";
      }
    }
  }

  for (let i = 0; i < wordsArray.length; i++)
    if (!CommonWords.includes(wordsArray[i])) {
      let filterWord = wordsArray[i].replace(/[^a-zA-Z ]/g, "");
      if (filterWord !== "") filterWordsArray.push(filterWord);
    }

  filterWordsArray.forEach(
    (element) => (countsObject[element] = (countsObject[element] || 0) + 1)
  );

  for (const property in countsObject)
    wordsCloudArray.push({ text: property, value: countsObject[property] });

  setADataGetted(issuesArray);
  setADataWordCloudGetted(wordsCloudArray);
}
