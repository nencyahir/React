import React, { useState } from 'react';
import UserProfile from './UserProfile';

function App() {
  const [user, setUser] = useState({
    name: 'John Doe',
    age: 25,
    email: 'johndoe@example.com',
  });

  const updateEmail = () => {
    setUser({ ...user, email: 'newemail@example.com' });
  };

  return (
    <div>
      <UserProfile user={user} updateEmail={updateEmail} />
    </div>
  );
}


export default App;