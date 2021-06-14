module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employees", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      }
    });

    Employee.associate = function(models) {
      Employee.belongsTo(models.users, { foreignKey: 'user_id'});
    }
    return Employee;
  };