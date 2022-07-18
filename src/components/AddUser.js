import React, { useState } from 'react';

import Card from './card';

import classes from './AddUser.module.css';

import Button from './button';

import ErrorModal from './ErrorModal';

const Adduser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error,setError]=useState();
  const addUserH = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError(
        {
          title:"INVALID INPUT :(",
          message:"PLEASE ENTER VALID ENTRY"
        }
      );
      return;
    }
    if (enteredAge<1) {
      setError(
        {
          title:"INVALID INPUT :(",
          message:"PLEASE ENTER VALID ENTRY"
        }
      );
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler=()=>{
    setError(null);
  };

  return (

    <div >
      {error &&<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <div />
      <Card className={classes.input}>
        <form onSubmit={addUserH}>
          <label htmlFor="username">TO DO-TIMELINE</label>
          <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
          <label htmlFor="age">WHAT TO DO</label>
          <input id="age" type="text" value={enteredAge} onChange={ageChangeHandler} />
          <Button type="submit">ADD WHAT TO DO</Button>
        </form>
      </Card>
    </div>
  );
};

export default Adduser;