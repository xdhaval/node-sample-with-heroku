const user = require("../controllers/user.controller.js");

var router = require("express").Router();

// Create a new user
router.post("/", user.create);

// Retrieve all users
router.get("/", user.findAll);

// Retrieve user
router.get("/:id", user.findOne);

module.exports = router;