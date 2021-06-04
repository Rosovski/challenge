import React, { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState({});

  // useEffect(() => {
  //   const getUsers = async () => {
  //     await fetch("http://localhost:3000/users")
  //       .then((res) => res.json)
  //       .then((user) => setUsers({ user }));
  //     console.log(users);
  //   };

  //   getUsers();
  // }, []);
  const getUsers = () => {
    const url = "http://localhost:3000/users/";
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const getUsersByAge = () => {
    const url = "http://localhost:3000/users/age/carrot";
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  getUsers();
  getUsersByAge();

  return (
    <div>
      <h1>All Users</h1>
      <h3>Users and their age</h3>
    </div>
  );
};

export default Users;
