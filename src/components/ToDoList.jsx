import React, { useState, useEffect } from "react";
import Item from "./Item";
function ToDoList() {
  const [list, setList] = useState([]);


  const items = list.map((info, index) => (
    <tr key={index}>  
      <td>{info.name}</td>
      <td>{info.item}</td>
    </tr>
  ));


  useEffect(() => {
    console.log("another item");
  
    // Return a cleanup function
    return () => {
      console.log("Return");
    };
  }, [list]);
  

  const addItem = (data) => {
    const toAdd = { name: data.name, item: data.item };
    toAdd.id = list.length + 1;
    let newList = [...list];
    newList.push(toAdd);
    setList(newList);
    
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th id="nameId">Name</th>
            <th id="itemId">item</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </table>
       <Item addItem={addItem}/>
    </div>
  );
}

export default ToDoList;
