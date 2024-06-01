import React, { useState } from "react";
import "./styles.css";
function Box(props) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const [nameDelete, setNameDelete] = useState("");
    const [idDelete, setIdDelete] = useState("");
    const [ageDelete, setAgeDelete] = useState("");
    const changeName = (event) => {
        setName(event.target.value);
    };

    const changeAge = (event) => {
        setAge(event.target.value);
    };

    const changeCity = (event) => {
        setCity(event.target.value);
    };
    const changeTablebyName = (event) => {
        setNameDelete(event.target.value);
    };
    const changeTablebyAge = (event) => {
        setAgeDelete(event.target.value);
    };
    const changeTablebyId = (event) => {
        setIdDelete(event.target.value);
    };
    const handleClickAdd = (event) => {
        const val = {
            name,age,city
        };
        props.adding(val);
        clearState();
    };
    const handleClickClear = (event) => {
        props.clear();
        clearState();
    };
    const handleClickSortByAge = (event) => {
        props.sortByAge();
        clearState();
        clearDelete();
    };
    const handleClickSortByName = (event) => {
        props.sortByName();
        clearState();
        clearDelete();
    };
    const handleClickSortById = (event) => {
        props.sortById();
        clearState();
        clearDelete();
    };
    const deleteRowByName = () => {
        props.deleteRowName(nameDelete);
        clearDelete();
    };
    const deleteRowByAge = () => {
        props.deleteRowAge(ageDelete);
        clearDelete();
    };
    const deleteRowById = () => {
        props.deleteRowId(idDelete);
        clearDelete();
    };
    const clearState = () => {
        setName("");
        setAge("");
        setCity("");
    };
    const clearDelete = () => {
        setIdDelete("");
        setNameDelete("");
        setAgeDelete("");
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
            <input
                placeholder="city"
                type="text"
                value={city}
                onChange={changeCity}
            />
            <button onClick={handleClickAdd}> add row</button>
            <button className="buttunOptions" onClick={handleClickClear}>
                {" "}
                clear table
            </button>
            <button className="buttunOptions" onClick={handleClickSortByName}>
                {" "}
                sort by name
            </button>
            <button className="buttunOptions" onClick={handleClickSortByAge}>
                {" "}
                sort by age
            </button>
            <button className="buttunOptions" onClick={handleClickSortById}>
                {" "}
                sort by id
            </button>
            <div className="toDelete">
                <input
                    placeholder="row name to delete"
                    type="text"
                    value={nameDelete}
                    onChange={changeTablebyName}
                />
                <button className="buttunOptions" onClick={deleteRowByName}>
                    DeleteByName
                </button>
            </div>
            <div className="toDelete">
                <input
                    className="rowClear"
                    placeholder="row age to delete"
                    type="text"
                    value={ageDelete}
                    onChange={changeTablebyAge}
                />
                <button className="buttunOptions" onClick={deleteRowByAge}>
                    DeleteByAge
                </button>
            </div>
            <div className="toDelete">
                <input
                    className="rowClear"
                    placeholder="row id to delete"
                    type="text"
                    value={idDelete}
                    onChange={changeTablebyId}
                />
                <button className="buttunOptions" onClick={deleteRowById}>
                    DeleteById
                </button>
            </div>
        </div>
    );
}

export default Box;
