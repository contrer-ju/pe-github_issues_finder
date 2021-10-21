export default function FieldsControlsBox({
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
}) {
  return (
    <div
      id="results-box"
      style={{
        width: "500px",
        margin: "7px",
        padding: "10px 7px 7px",
        backgroundColor: "gray",
      }}
      className="d-flex flex-column justify-content-between align-items-center border border-5 border-warning"
    >
      <div
        style={{ width: "450px" }}
        className="d-flex justify-content-between align-items-center"
      >
        <span>Fields to show:</span>
        <div
          style={{ width: "335px" }}
          className="d-flex justify-content-around align-items-center"
        >
          <input
            type="checkbox"
            id="state_field"
            name="checkbox_field"
            checked={stateCheckbox}
            onChange={() => toggleStateCheckbox()}
          />
          <span>State</span>
          <input
            type="checkbox"
            id="created_at_field"
            name="checkbox_field"
            checked={createdAtCheckbox}
            onChange={() => toggleCreatedAtCheckbox()}
          />
          <span>Created At</span>
          <input
            type="checkbox"
            id="user_field"
            name="checkbox_field"
            checked={titleCheckbox}
            onChange={() => toggleTitleCheckbox()}
          />
          <span>Title</span>
          <input
            type="checkbox"
            id="body_field"
            name="checkbox_field"
            checked={bodyCheckbox}
            onChange={() => toggleBodyCheckbox()}
          />
          <span>Body</span>
          <input
            type="checkbox"
            id="url_field"
            name="checkbox_field"
            checked={urlCheckbox}
            onChange={() => toggleUrlCheckbox()}
          />
          <span>URL</span>
        </div>
      </div>
      <br />
      <div
        style={{ width: "450px" }}
        className="d-flex justify-content-between align-items-center"
      >
        <span style={{ margin: "10px" }}>What Issue do you want: </span>
        <input
          type="text"
          style={{ width: "230px" }}
          name="search_field"
          value={phraseSearch}
          onInput={(event) => setAPhraseSearch(event.target.value)}
        />
        <button
          type="button"
          className="btn btn-primary"
          style={{ margin: "10px" }}
          onClick={() =>
            onSearchButtom(phraseSearch, dataGetted, setAResultToShowArray)
          }
        >
          Search
        </button>
      </div>
    </div>
  );
}
