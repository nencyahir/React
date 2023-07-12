import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateUserForm from './component/CreateUserForm';

const Url = 'https://reqres.in/api/users/';

function App() {
  const [users, setUsers] = useState([]);
  const [editedData, setEditedData] = useState({});
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    axios.get(Url).then((response) => {
      setUsers(response.data.data);
    });
  }, []);

  function editData(id) {
    const editedUsers = users.map((user) => {
      if (user.id === id) {
        // Set the user properties to the edited values
        user.isEditing = true; // Add a flag to indicate editing mode
      }
      return user;
    });

    setUsers(editedUsers);
  }

  function handleInputChange(event, id, property) {
    const editedUsers = users.map((user) => {
      if (user.id === id) {
        // Update the specific property with the edited value
        user[property] = event.target.value;
      }
      return user;
    });

    setUsers(editedUsers);
    setEditedData(users.find((user) => user.id === id)); // Update the editedData state
  }

  function updateData(id) {
    const editedUser = users.find((user) => user.id === id);
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        // Update the user properties with the edited values
        user.first_name = editedUser.first_name;
        user.email = editedUser.email;
        user.avatar = editedUser.avatar;
        user.isEditing = false; // Reset the editing flag
      }
      return user;
    });

    setUsers(updatedUsers);
    setEditedData({}); // Reset the editedData state
  }

  function deleteUser(id) {
    axios.delete(`${Url}/${id}`).then((response) => {
      console.log(response);
      // Remove the deleted user from the state
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    });
  }

  function openCreateForm() {
    setIsCreating(true);
  }

  function closeCreateForm() {
    setIsCreating(false);
  }

  function createUser(newUser) {
    axios.post(Url, newUser).then((response) => {
      console.log(response);
      setUsers((prevUsers) => [...prevUsers, response.data]);
      closeCreateForm();
    });
  }

  return (
    <div style={{ display: 'flex' }}>

      {users.map((user) => (
        <div key={user.id} style={{ marginRight: '80px', display: 'flex', flexDirection: 'column' }}>
          <h1>{user.first_name}</h1>
          <p>{user.email}</p>
          <img src={user.avatar} alt="user_image" />

          {user.isEditing ? (
            <>
              <input
                type="text"
                value={user.first_name}
                onChange={(event) => handleInputChange(event, user.id, 'first_name')}
              />
              <input
                type="text"
                value={user.email}
                onChange={(event) => handleInputChange(event, user.id, 'email')}
              />
              <input
                type="text"
                value={user.avatar}
                onChange={(event) => handleInputChange(event, user.id, 'avatar')}
              />
              <button onClick={() => updateData(user.id)}>Save</button>
              <button onClick={() => setUsers(users.filter((u) => u.id !== user.id))}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <button onClick={() => editData(user.id)}>Edit</button>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
         <button onClick={openCreateForm}>Create User</button>

      <CreateUserForm isOpen={isCreating} onClose={closeCreateForm} onCreate={createUser} />
    </div>
  );
}

export default App;
