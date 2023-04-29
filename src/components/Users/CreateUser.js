import styles from "./CreateUser.module.css";
import Button from "../UI/Button";
import React, {useState} from "react";
const CreateUser =(props)=>{
    const [inputName, setInputName] = useState("");
    const [inputAge, setInputAge] = useState("");


    const nameChangeHandler =(event)=>{
        setInputName(event.target.value);
    }
    const ageChangeHandler =(event)=>{
        setInputAge(event.target.value);
    }

    const createUserHandler = (event)=>{
        event.preventDefault();
        props.onCreateUser(inputName, inputAge);
        setInputName("");
        setInputAge("");
    }


    return (
        <div className={styles.input}>
            <form onSubmit={createUserHandler}>
                <label>Name</label>
                <input type="text" id="name" value={inputName} onChange={nameChangeHandler}></input>
                <label>Age</label>
                <input type="number" id="age" value={inputAge} onChange={ageChangeHandler}></input>
                <Button type="submit">Add User</Button>
            </form>
        </div>
    )
}
export default CreateUser;

