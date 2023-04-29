import CreateUser from "./components/Users/CreateUser";
import UserList from "./components/Users/UserList";
import React, {useState} from "react";

function App() {
  const [userList, setUserList] = useState([]);

  const createUserHandler = (name, age)=>{
    setUserList((prevUserList) =>{
      const newUser = [...prevUserList,
        {name: name, age: age, id: Math.random().toString()}
      ]
      console.log('New User ', newUser)
      return newUser;
    })
  }
  return (
   <div>
    <CreateUser onCreateUser={createUserHandler}/>
    <UserList users={userList} />
   </div>
  );
}

export default App;
