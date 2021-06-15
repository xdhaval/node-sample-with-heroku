const db = require("../models");
const { Employee, User } = db;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!Boolean(req.body.name) || !Boolean(req.body.email) || !Boolean(req.body.user_id)) {
        res.status(400).send({
            message: "All Fields are required!"
        });
        return;
    }

    // Create a user
    const user = {
        organizationName: req.body.name,
        email: req.body.email,
        userId: req.body.user_id
    };
    // Save user in the database
    Employee.create(user)
        .then(async (data) => {
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

    var condition = name ? { organizationName: { [Op.iLike]: `%${name}%` } } : null;
    Employee.findAll({ where: condition, include: [{ model: User }] })
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

exports.findOne = (req, res) => {
    const id = req.query.id;
    Employee.findOne({ id: id })
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