import React,{useState} from 'react';
import Adduser from './components/AddUser';
import UserList from './components/UserList';

function App() {

  const [userList,setUserList]=useState([]);

  const addUserH=(uName,uAge)=>{
    setUserList((prevUserList)=>{
      return [...prevUserList,{ name: uName , age: uAge }];
    });
  };
  return (
    <div>
      <Adduser onAddUser={addUserH}/>
      <UserList users={userList}/>
    </div>
    
  );
}

export default App;

