import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (!enteredUsername.trim().length && !enteredAge.trim().length) {
      setError({
        name: "Invalid Name and Age",
        message: "Please be valid",
      });
      return;
    } else if (!enteredUsername.trim().length) {
      setError({
        name: "Invalid Name",
        message: "Please be valid",
      });
      return;
    } else if (!enteredAge.trim().length) {
      setError({
        name: "Invalid age",
        message: "Please be valid",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        name: "Invalid age limit idiot",
        message: "Please be valid",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler=()=>
  {
      setError(null);
  }
  return (
    <div>
      {error && <ErrorModal name={error.name} message={error.message} close = {errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
