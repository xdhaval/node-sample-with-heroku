module.exports = app => {
    const user = require("./user.route.js");
    const employee = require("./employee.route.js");
    
    app.use('/api/users', user);
    app.use('/api/employees', employee);
};