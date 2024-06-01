import React, { useState } from "react";
import "./styles.css";

function Practice() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const ppl = data.map((info, id) => {
    return <tr key={id}>
      <td>{info.name}</td>
      <td>{info.city}</td>
    </tr>
  })
  const addRow = (info) => {
    let toAdd = [...data];
    toAdd.push(info);
    setData(toAdd);
  }
  const handleName = (event) => {
    setName(event.target.value);
  }
  const handleCity = (event) => {
    setCity(event.target.value);
  }
  const handleClickAdd = () => {
    const val = { name, city };
    clearState();
    addRow(val);
  };

  const clearState = () => {
    setName("");
    setCity("");
  }
  const handleUp = () =>{
    const last = data[data.length-1];
    for(let i = 1 ;i<data.length;i++){
      data[i]=data[i-1];
    }
    data[0]=last;
  }
  const handleDown = () =>{
    
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <button className="updown" onClick={handleUp}> &#129033;</button>
              <button className="updown" onClick={handleDown}> &#129035;</button>
              name
            </th>
            <th>city</th>
          </tr>
        </thead>
        <tbody>{ppl}</tbody>
      </table>
      <div>
        <label>Name</label>
        <input
          placeholder="name"
          type="text"
          value={name}
          onChange={handleName}
        />
        <label>item</label>
        <input
          placeholder="city"
          type="text"
          value={city}
          onChange={handleCity}
        />
        <button onClick={handleClickAdd}>add row</button>
      </div>
    </div>
  )
}

export default Practice;
