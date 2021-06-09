module.exports = app => {
    const user = require("./user.route.js");
    app.use('/api/users', user);
};