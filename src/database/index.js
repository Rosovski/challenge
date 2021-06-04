"use strict";
const _ = require("lodash");
const db = require("./db.js");

// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataAccessMethod());
    }, 500);
  });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
  const dataAccessMethod = () => _.map(db.usersById, (userInfo) => userInfo);
  return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (item) => {
  const dataAccessMethod = () => {
    // fill me in :)
    const summary = {};

    for (let key in db.usersById) {
      const user = db.usersById[key];
      let userName = user.username;
      let userAge = user.age;

      if (db.itemsOfUserByUsername[userName].includes(item)) {
        if (!(userAge in summary)) {
          summary[userAge] = 1;
        } else {
          summary[userAge] += 1;
        }
      }
    }

    return summary;
  };
  return mockDBCall(dataAccessMethod);
};

module.exports = {
  getUsers,
  getListOfAgesOfUsersWith,
};
