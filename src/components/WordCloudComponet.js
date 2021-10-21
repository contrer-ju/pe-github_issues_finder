import ReactWordcloud from "react-wordcloud";

export default function WordCloud({ dataWordCloudGetted }) {
  const options = {
    colors: ["white"],
    enableTooltip: false,
    fontSizes: [22, 47],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 2,
    rotationAngles: [0, 90],
    transitionDuration: 1000,
  };

  return (
    <div style={{ width: "500px", height: "210px" }}>
      {dataWordCloudGetted !== null && (
        <ReactWordcloud
          maxWords={dataWordCloudGetted.length * 0.4}
          options={options}
          words={dataWordCloudGetted}
        />
      )}
    </div>
  );
}
