import React, { useState } from 'react';
import axios from 'axios';

const Url = 'https://reqres.in/api/users/';

function CreateUserForm({ isOpen, onClose, onCreate }) {
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
      onCreate(response.data); // Pass the created user data to the callback
      onClose();
    });
  }

  return (
    <div style={{ display: isOpen ? 'block' : 'none' }}>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newUser.first_name}
          onChange={(event) => handleInputChange(event, 'first_name')}
          placeholder="First Name"
          required
        />
        <input
          type="email"
          value={newUser.email}
          onChange={(event) => handleInputChange(event, 'email')}
          placeholder="Email"
          required
        />
        <input
          type="text"
          value={newUser.avatar}
          onChange={(event) => handleInputChange(event, 'avatar')}
          placeholder="Avatar URL"
          required
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default CreateUserForm;
