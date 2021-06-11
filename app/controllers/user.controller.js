const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!Boolean(req.body.name) || !Boolean(req.body.email) || !Boolean(req.body.password)) {
        res.status(400).send({
            message: "All Fields are required!"
        });
        return;
    }

    // Create a user
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    console.log("user>>>>>>", user)
    // Save user in the database
    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });
};

exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

    User.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};