const express = require("express");
const controller = express.Router();

const studentData = require("../studentData.json");

controller.get("/", (request, response) => {
  let { limit } = request.query;

  let studentDataForDelivery = { ...studentData };

  if (limit == 0) {
    response.json(studentDataForDelivery);
  } else {
    studentDataForDelivery.students = studentDataForDelivery.students.slice(
      0,
      limit
    );
    response.json(studentDataForDelivery);
  }
});

controller.get("/:id", (request, response) => {
  try {
    if (!/[0-9]/.test(request.params.id)) {
      response.send("Student id must be a number");
      //why is the return necessary, getting a cannot set headers after they are sent to the client
      return;
    }

    const selectedStudent = studentData.students.find(
      (eachStudent) => eachStudent.id === request.params.id
    );

    if (selectedStudent) {
      response.json(selectedStudent);
    } else {
      response.send("Student not found");
    }
  } catch (err) {
    response.status(500).send("An error occured");
  }
});

module.exports = controller;
