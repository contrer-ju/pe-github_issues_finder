export default function TableHead({
  stateCheckbox,
  createdAtCheckbox,
  titleCheckbox,
  bodyCheckbox,
  urlCheckbox,
}) {
  let stateWitdh =
    5 +
    (!createdAtCheckbox * 14) / 4 +
    (!titleCheckbox * 20) / 4 +
    (!bodyCheckbox * 45) / 4 +
    (!urlCheckbox * 15) / 4;
  let createdWitdh =
    14 +
    (!stateCheckbox * 5) / 4 +
    (!titleCheckbox * 20) / 4 +
    (!bodyCheckbox * 45) / 4 +
    (!urlCheckbox * 15) / 4;
  let titleWitdh =
    20 +
    (!stateCheckbox * 5) / 4 +
    (!createdAtCheckbox * 14) / 4 +
    (!titleCheckbox * 20) / 4 +
    (!bodyCheckbox * 45) / 4 +
    (!urlCheckbox * 15) / 4;
  let bodyWitdh =
    45 +
    (!stateCheckbox * 5) / 4 +
    (!createdAtCheckbox * 14) / 4 +
    (!titleCheckbox * 20) / 4 +
    (!urlCheckbox * 15) / 4;
  let urlWitdh =
    15 +
    (!stateCheckbox * 5) / 4 +
    (!createdAtCheckbox * 14) / 4 +
    (!titleCheckbox * 20) / 4 +
    (!bodyCheckbox * 45) / 4;

  return (
    <thead>
      <tr>
        <th scope="col" style={{ width: "1%" }}>
          #
        </th>
        {stateCheckbox && (
          <th scope="col" style={{ width: `${stateWitdh}%` }}>
            State
          </th>
        )}
        {createdAtCheckbox && (
          <th scope="col" style={{ width: `${createdWitdh}%` }}>
            Created At
          </th>
        )}
        {titleCheckbox && (
          <th scope="col" style={{ width: `${titleWitdh}%` }}>
            Title
          </th>
        )}
        {bodyCheckbox && (
          <th scope="col" style={{ width: `${bodyWitdh}%` }}>
            Body
          </th>
        )}
        {urlCheckbox && (
          <th scope="col" style={{ width: `${urlWitdh}%` }}>
            URL
          </th>
        )}
      </tr>
    </thead>
  );
}
