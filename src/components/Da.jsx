import React, { useState } from "react";
import "./styles.css";
function Da(props) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const changeName = (event) => {
        setName(event.target.value);
    };

    const changeAge = (event) => {
        setAge(event.target.value);
    };

    const changeCity = (event) => {
        setCity(event.target.value);
    };
    const handleClickAdd = (event) => {
        const a = age>0;
        const b = isNaN(name);
        const c = isNaN(city);
        if(a && b && c){
            const val = {
                name,age,city
            };
            props.adding(val);
            
        }
        if (!a){
            console.log("Age need to be a number > 0");
        }
        if (!b){
            console.log("Name need to be a name! not a number");
        }
        if (!c){
            console.log("City need to be a city name! not a number");
        }
        clearState();
    };
    
    const clearState = () => {
        setName("");
        setAge("");
        setCity("");
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
            <label>Age</label>
            <input placeholder="age" type="text" value={age} onChange={changeAge} />
            <label>City</label>
            <input placeholder="city" type="text" value={city} onChange={changeCity}/>   
            <button onClick={handleClickAdd}>add row</button>
        </div>
    );
}
export default Da;