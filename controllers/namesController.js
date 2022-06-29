const express = require("express");
const controller = express.Router();

const {
  repeatNTimesWithSpace,
  capitalizeFirstLetter,
} = require("../utils/stringUtils");

controller.get("/capital/:name", (request, response) => {
  try {
    const name = request.params.name;

    const capitalizedName = capitalizeFirstLetter(name);
    response.send(capitalizedName);
  } catch (error) {
    response.send("There was an error");
  }
});

controller.get("/:name/:times", (request, response) => {
  try {
    const name = request.params.name;
    const times = request.params.times;

    const repeatedNames = repeatNTimesWithSpace(name, times);
    response.send(repeatedNames);
  } catch (error) {
    response.send("There was an error");
  }
});

//why is it module.exports
module.exports = controller;
