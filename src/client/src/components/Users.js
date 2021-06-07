import React, { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = () => {
      const url = "http://localhost:3000/users/";
      fetch(url)
        .then((res) => res.json())
        .then((data) => setUsers(data));
    };

    getUsers();
  }, []);
  // const getUsers = () => {
  //   const url = "http://localhost:3000/users/";
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // };

  // const getUsersByAge = () => {
  //   const url = "http://localhost:3000/users/age/carrot";
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // };

  // getUsers();
  // getUsersByAge();
  console.log(users);
  return (
    <div>
      <h1>All Users</h1>
      <p>Users and their age</p>
      {users.map((user) => (
        <p>{user.username}</p>
      ))}
    </div>
  );
};

export default Users;
