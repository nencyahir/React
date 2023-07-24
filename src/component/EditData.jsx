import React, { useState } from 'react';
import InputFields from './InputFields';

function EditData({ user, users, setUsers }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
    avatar: user.avatar,
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedUsers = users.map((u) => {
      if (u.id === user.id) {
        return { ...u, ...editedUser };
      }
      return u;
    });

    setUsers(updatedUsers);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

 
  return (
    <>
      {isEditing ? (
        <>
          <InputFields
            values={editedUser}
            onChangeInput={(event, property) => setEditedUser({ ...editedUser, [property]: event.target.value })}
          />

          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </>
  );
}

export default EditData;
