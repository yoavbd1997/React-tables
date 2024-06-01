import React, { useState } from "react";
import "./styles.css";
function Item(props) {
    const [name, setName] = useState("");
    const [item, setItem] = useState("");
    const changeName = (event) => {
        setName(event.target.value);
    };

    const changeItem = (event) => {
        setItem(event.target.value);
    };

    
    const handleClickAdd = (event) => {
        const val = {
            name,item
        };
        props.addItem(val);
        clearState();
    };
    const clearState = () => {
        setName("");
        setItem("");
    };
    return (
        <div>
            <label>Name</label>
            <input
                placeholder="name"
                type="text"
                value={name}
                onChange={changeName}
            />
            <label>item</label>
            <input
                placeholder="name"
                type="text"
                value={item}
                onChange={changeItem}
            />
            <button onClick={handleClickAdd}>add row</button>
        </div>
    );
}
export default Item;