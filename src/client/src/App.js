import React, { useState } from "react";
import "./App.css";
import Users from "./components/Users";
import Button from "./components/Button";
import UsersAge from "./components/UsersAge";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [item, setItem] = useState("");

  return (
    <div className="App">
      <Users />
      <Button onChange={setItem} />
      <UsersAge />
    </div>
  );
};

export default App;
