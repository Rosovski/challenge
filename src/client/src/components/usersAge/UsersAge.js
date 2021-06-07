import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "./userage.css";

const UsersAge = ({ item }) => {
  const [usersByAge, setUsersByAge] = useState({});

  useEffect(() => {
    const getUsersByAge = () => {
      const url = "http://localhost:3000/users/age/" + item;

      if (url === "http://localhost:3000/users/age/") {
        return;
      }

      fetch(url)
        .then((res) => res.json())
        .then((data) => setUsersByAge(data));
    };

    getUsersByAge();
  }, [item]);

  return (
    <div className="user-age-table">
      <Table responsive>
        <thead>
          <tr>
            <th>Age</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(usersByAge).map((age) => (
            <tr>
              <td>{age}</td>
              <td>{usersByAge[age]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersAge;
