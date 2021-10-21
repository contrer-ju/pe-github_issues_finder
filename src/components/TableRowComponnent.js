export default function TableRow({
  stateCheckbox,
  createdAtCheckbox,
  titleCheckbox,
  bodyCheckbox,
  urlCheckbox,
  row,
}) {
  return (
    <tr>
      <th scope="col">{row.number}</th>
      {stateCheckbox && (
        <td style={{ wordBreak: "break-word" }}>{row.state}</td>
      )}
      {createdAtCheckbox && (
        <td style={{ wordBreak: "break-word" }}>{row.created}</td>
      )}
      {titleCheckbox && (
        <td style={{ wordBreak: "break-word" }}>{row.title}</td>
      )}
      {bodyCheckbox && <td style={{ wordBreak: "break-word" }}>{row.body}</td>}
      {urlCheckbox && (
        <td style={{ wordBreak: "break-word" }}>
          <a href={row.url} target="_blank" rel="noreferrer">
            {row.url}
          </a>
        </td>
      )}
    </tr>
  );
}
