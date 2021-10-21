import TableHead from "./TableHeadComponent";
import TableRow from "./TableRowComponnent";

export default function ResultsBox({
  stateCheckbox,
  createdAtCheckbox,
  titleCheckbox,
  bodyCheckbox,
  urlCheckbox,
  resultToShowArray,
}) {
  return (
    <div
      id="results-box"
      style={{
        width: "980px",
        margin: "10px",
        padding: "20px",
        backgroundColor: "gray",
      }}
      className="border border-5 border-warning"
    >
      <div className="table-responsive">
        <table className="table table-hover table-dark">
          <TableHead
            {...{
              stateCheckbox,
              createdAtCheckbox,
              titleCheckbox,
              bodyCheckbox,
              urlCheckbox,
            }}
          />
          <tbody>
            {resultToShowArray.map((row, index) => (
              <TableRow
                key={index}
                {...{
                  stateCheckbox,
                  createdAtCheckbox,
                  titleCheckbox,
                  bodyCheckbox,
                  urlCheckbox,
                  row,
                }}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
