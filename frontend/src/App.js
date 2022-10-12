import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    callBackEnd();
  }, []);

  const callBackEnd = async () => {
    await axios
      .get("http://localhost:8001/api/users")
      .then((res) => {
        console.log("res: ", res);
        setUsers(res.data.users);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };
  return (
    <div className="App">
      {users.map((user, index) => (
        <div key={index}>
          <h2>{user.firstName}</h2>
        </div>
      ))}
    </div>
  );
};

export default App;
