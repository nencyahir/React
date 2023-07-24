import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateUserForm from './component/CreateData';
import InputFields from './component/InputFields';
import EditData from './component/EditData.jsx';
import DeleteData from './component/DeleteData';
import CreateData from './component/CreateData';

const Url = 'https://reqres.in/api/users/';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(Url).then((response) => {
      setUsers(response.data.data);
    });
  }, []);


  return (
    <div style={{ display: 'flex' }}>
      {users.map((user) => (
        <div key={user.id} style={{ marginRight: '80px', display: 'flex', flexDirection: 'column' }}>
          <h1>{user.first_name}</h1>
          <p>{user.email}</p>
          <img src={user.avatar} alt="user_image" />
          <EditData
            user={user}
            users={users}
            setUsers={setUsers}
          />
           <DeleteData dataId={user.id} users={users} setUsers={setUsers}/>
        </div>
      ))}
      <CreateData users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
