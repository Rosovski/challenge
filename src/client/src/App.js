import React, { useState } from "react";
import "./App.css";
import Users from "./components/users/Users";
import Button from "./components/button/Button";
import UsersAge from "./components/usersAge/UsersAge";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [item, setItem] = useState("");

  return (
    <div className="App">
      <Users />
      <h2>Age Demographic of Users With ___</h2>
      <Button onChange={setItem} />
      <UsersAge item={item} />
    </div>
  );
};

export default App;
