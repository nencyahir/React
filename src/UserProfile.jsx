import React from 'react';

 function UserProfile({ user, updateEmail }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <button onClick={updateEmail}>Update Email</button>
    </div>
  );
}


export default UserProfile