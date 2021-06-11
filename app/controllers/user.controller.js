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
    // Save user in the database
    User.create(user)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).send({
                data: null,
                status: 500,
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};

exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

    User.findAll({ where: condition })
        .then(data => {
            res.status(200).json({
                data: data,
                status: 200,
                message: null
            });
        })
        .catch(err => {
            res.status(500).send({
                data: null,
                status: 500,
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};