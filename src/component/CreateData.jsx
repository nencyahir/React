import React, { useState } from 'react';
import axios from 'axios';
import InputFields from './InputFields';
const Url = 'https://reqres.in/api/users/';

function CreateData({ users, setUsers }) {
  const [isCreating, setIsCreating] = useState(false);

  const [newUser, setNewUser] = useState({
    first_name: '',
    email: '',
    avatar: ''
  });

  function handleInputChange(event, property) {
    setNewUser((prevUser) => ({
      ...prevUser,
      [property]: event.target.value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.post(Url, newUser).then((response) => {
      console.log(response);
      setUsers((prevUsers) => [...prevUsers, response.data]); 
      setIsCreating(false); 
    });
  }

  return (
    <>
      {isCreating ? (
        <div>
          <h2>Create User</h2>
          <form onSubmit={handleSubmit}>
            <InputFields values={newUser} onChangeInput={handleInputChange} />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <button onClick={() => setIsCreating(true)}>Create User</button>
      )}
    </>
  );
}

export default CreateData;
