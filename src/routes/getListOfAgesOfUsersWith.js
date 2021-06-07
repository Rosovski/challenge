"use strict";
const mockDBCalls = require("../database/index.js");

// const getListOfAgesOfUsersWithHandler = async (request, response) => {
//     const itemToLookup = 'carrot';
//     const data = await mockDBCalls.getListOfAgesOfUsersWith(itemToLookup);
//     return response.status(200).send(JSON.stringify(data));
// };

// module.exports = (app) => {
//     app.get('/users/age', getListOfAgesOfUsersWithHandler);
// };

const getListOfAgesOfUsersWithHandler = async (request, response, next) => {
  try {
    const itemToLookup = request.params.item;
    const data = await mockDBCalls.getListOfAgesOfUsersWith(itemToLookup);
    return response.status(200).send(JSON.stringify(data));
  } catch (err) {
    return next(new Error("Couldn't get the user age demographic object"));
  }
};

module.exports = (app) => {
  app.get("/users/age/:item", getListOfAgesOfUsersWithHandler);
};
