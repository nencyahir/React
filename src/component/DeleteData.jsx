import React from 'react';
import axios from 'axios';

const Url = 'https://reqres.in/api/users/';

const DeleteData = ({ dataId, users, setUsers }) => {
  const handleDelete = () => {
    axios.delete(`${Url}/${dataId}`).then((response) => {
      console.log(response);
      const updatedUsers = users.filter((user) => user.id !== dataId);
      setUsers(updatedUsers);
    });
  };
  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteData;
