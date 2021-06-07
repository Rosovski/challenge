import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "./users.css";

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

  return (
    <div>
      <h1>All Users</h1>
      <h3>Users and their age</h3>
      <div className="user-table">
        <Table responsive>
          <thead>
            <tr>
              <th>Username</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.username}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Users;
