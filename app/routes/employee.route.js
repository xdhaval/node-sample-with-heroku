const employee = require("../controllers/employee.controller.js");

var router = require("express").Router();

// Create a new Employee
router.post("/", employee.create);

// Retrieve all Employees
router.get("/", employee.findAll);

// Retrieve Employee
router.get("/:id", employee.findOne);

module.exports = router;