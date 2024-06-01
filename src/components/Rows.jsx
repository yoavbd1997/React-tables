import React, { useState, useEffect} from "react";
import "./styles.css";
import Da from "./Da";
import { v4 as uuidv4 } from 'uuid';

function Rows(props) {
  const [personData, setPersonData] = useState([]);
  const [place, setPlace] = useState(0);
  const n = 2;
  const rowsToShow = (n) => {
    if (n >= personData.length) {
      return [...personData];
    } else {
      const lastNRows = personData.slice(personData.length - n);
      return lastNRows;
    }
  };

  
  useEffect (()=>{console.log("Place is: " + place);},[place])

  const toShow = rowsToShow(n);
  const rows = toShow.map((info) => (
    <tr key={uuidv4()}>
      {/* dont have to somtimes but reccommend */}
      {/* table row */}
      {/* table data */}
      <td>{info.id}</td>
      <td>{info.name}</td>
      <td>{info.age}</td>
      <td>{info.city}</td>
    </tr>
  ));


  const addRows = (data) => {
    const total = personData.length;
    let keep = total + 1;
    arrangeRows();
    const people = sortID();
    data.id = keep;
    people.push(data);
    setPersonData(people);
    setPlace(people.length);
  };


  const handleUp = () => {
    console.log(place);
    if (personData.length <= 1 || place <= n) return;

    const last = personData[personData.length - 1].name;
    let newPersonData = [...personData];

    for (let i = personData.length - 1; i > 0; i--) {
      newPersonData[i].name = personData[i - 1].name;
    }
    setPlace(place - 1)
    newPersonData[0].name = last;
    setPersonData(newPersonData);
  };



  const handleDown = () => {
    console.log(personData.length-place);

    if (personData.length <= 1 || personData.length-place <= 0) return; // If there's only one person, no need to move up

    const first = personData[0].name;
    let newPersonData = [...personData];

    for (let i = 0; i < personData.length - 1; i++) {
      newPersonData[i].name = personData[i + 1].name; // Update each person's name to the one below
    }
    setPlace(place + 1);
    newPersonData[personData.length - 1].name = first; // Move the first person's name to the last position
    setPersonData(newPersonData);
  };

  const arrangeRows = () => {
    for (let i = place; i < personData.length; i++) {
      const first = personData[0].name;
      let newPersonData = [...personData];

      for (let i = 0; i < personData.length - 1; i++) {
        newPersonData[i].name = personData[i + 1].name; 
      }
      newPersonData[personData.length - 1].name = first; 
      setPersonData(newPersonData);
    }
  };

  // useEffect(() => {
  //   console.log("Another row");
  
  //   return () => {
  //     console.log(personData[personData.length-1]);
  //   };
  // }, [personData]);

  const sortID = () => {
    const sortedData = [...personData].sort((a, b) => {
      return a.id - b.id;
    });
    return sortedData;
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th id="nameupdown">
              Name
              <button className="updown" onClick={handleUp}> &#129033;</button>
              <button className="updown" onClick={handleDown}> &#129035;</button>
            </th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <Da
        adding={addRows}
      />
    </div>
  );
}
export default Rows;

