import React, { useState } from "react";
import Box from "./Box";
function Data() {
  const [personData, setPersonData] = useState([]);
  const rows = personData.map((info, number) => (
    <tr key={number}>
      <td>{info.id}</td>
      <td>{info.name}</td>
      <td>{info.age}</td>
      <td>{info.city}</td>
    </tr>
  ));

  const addRows = (data) => {
    const total = personData.length;
    let keep = total + 1;
    const people = sortID();
    for (let i = 0; i < total; i++) {
      if (people[i].id !== i + 1) {
        keep = i + 1;
        break;
      }
    }
    data.id = keep;
    const updatedPerson = [...personData];
    updatedPerson.push(data);
    setPersonData(updatedPerson);
  };

  const deleteRowId = (rowIdToDelete) => {
    const idToDelete = parseInt(rowIdToDelete, 10);
    const updatedPersonData = personData.filter((row) => row.id !== idToDelete);
    setPersonData(updatedPersonData);
  };
  const deleteRowName = (rowNameToDelete) => {
    const updatedPersonData = personData.filter(
      (row) => row.name !== rowNameToDelete
    );
    setPersonData(updatedPersonData);
  };
  const deleteRowAge = (rowAgeToDelete) => {
    const updatedPersonData = personData.filter(
      (row) => row.age !== rowAgeToDelete
    );
    setPersonData(updatedPersonData);
  };

  const clear = () => setPersonData([]);

  const sortID = () => {
    const sortedData = [...personData].sort((a, b) => {
      return a.id - b.id;
    });
    return sortedData;
  };

  const sortById = () => {
    const sortedData = [...personData].sort((a, b) => {
      return a.id - b.id; // Compare ages numerically
    });
    setPersonData(sortedData);
  };
  const sortByAge = () => {
    const sortedData = [...personData].sort((a, b) => {
      return a.age - b.age; // Compare ages numerically
    });
    setPersonData(sortedData);
  };

  const sortByName = () => {
    const sortedData = [...personData].sort((a, b) => {
      // Compare names alphabetically
      return a.name.localeCompare(b.name);
    });
    setPersonData(sortedData);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <Box
        adding={addRows}
        clear={clear}
        sortByAge={sortByAge}
        sortByName={sortByName}
        sortById={sortById}
        deleteRowId={deleteRowId}
        deleteRowName={deleteRowName}
        deleteRowAge={deleteRowAge}
      />
    </div>
  );
}
export default Data;
