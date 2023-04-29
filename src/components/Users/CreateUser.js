import styles from "./CreateUser.module.css";
import Button from "../UI/Button";
import React, {useState} from "react";
const CreateUser =(props)=>{
    const [inputName, setInputName] = useState("");
    const [inputAge, setInputAge] = useState("");
    const [error, setError] = useState();


    const nameChangeHandler =(event)=>{
        setInputName(event.target.value);
    }
    const ageChangeHandler =(event)=>{
        setInputAge(event.target.value);
    }

    const createUserHandler = (event) => {
      event.preventDefault();
      if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
        setError({
          title: "Incorrect Input",
          message: "These fields cannot be empty",
        });
        return;
      }
      if (+inputAge < 1) {
        setError({
          title: "Incorrect Age",
          message: "The age should be greater than 0",
        });
        return;
      }
      // console.log(inputName, inputAge);
      props.onCreateUser(inputName, inputAge);
      setInputName("");
      setInputAge("");
    };

    return (
        <div className={styles.input}>
            {error && (<h2>{error.title} {error.message}</h2>)}
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

