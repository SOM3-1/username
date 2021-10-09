import React, { ueState, useState } from "react";
import AddUser from "./component/User/AddUser";
import UserList from "./component/User/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const adduserHandler = (u, a) =>
    setUsersList((prevsUserList) => {
      return [
        ...prevsUserList,
        { name: u, age: a, id: Math.random.toString() },
      ];
    });
  {
  }
  return (
    <div>
      <AddUser onAddUser={adduserHandler} />
      <UserList user={usersList} />
    </div>
  );
}

export default App;
