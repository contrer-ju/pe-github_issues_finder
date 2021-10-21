export default function GithubInfoBox({
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
}) {
  return (
    <div
      id="results-box"
      style={{ width:"500px", margin: "7px", padding: "10px 7px 7px", backgroundColor: "gray" }}
      className="d-flex flex-column justify-content-between align-items-center border border-5 border-warning"
    >
      <h3 id="title">GitHub Issues Finder</h3>
      <br />
      <div
        style={{ width: "450px", padding: "1px" }}
        className="d-flex justify-content-between align-items-center"
      >
        <span>What is the GitHub User: </span>
        <input
          type="text"
          id="github_user"
          name="input_field"
          value={gitHubUser}
          onInput={(event) => setAGitHubUser(event.target.value)}
        />
      </div>
      <div
        style={{ width: "450px", padding: "1px" }}
        className="d-flex justify-content-between align-items-center"
      >
        <span>What is the User Repo: </span>
        <input
          type="text"
          id="repo_user"
          name="input_field"
          value={repoUser}
          onInput={(event) => setARepoUser(event.target.value)}
        />
      </div>
      <br />
      <div
        style={{ width: "450px" }}
        className="d-flex justify-content-around align-items-center"
      >
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setTrueGetData()}
        >
          Get Issues List
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() =>
            onResetSearchButtom(
              setTrueStateCheckbox,
              setTrueCreatedAtCheckbox,
              setTrueTitleCheckbox,
              setTrueUrlCheckbox,
              setTrueBodyCheckbox,
              setAGitHubUser,
              setARepoUser,
              setFalseGetData,
              setADataGetted,
              setADataWordCloudGetted,
              setAResponseCode,
              setAResponseMessage,
              setAPhraseSearch,
              setAResultToShowArray
            )
          }
        >
          Reset Search
        </button>
      </div>
      <br />
      <div
        style={{ width: "450px" }}
        className="d-flex justify-content-around align-items-center"
      >
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">Status Code:</th>
              <td>{responseCode}</td>
            </tr>
            <tr>
              <th scope="row" className="w-25">
                Response Message:
              </th>
              <td> {responseMessage}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
