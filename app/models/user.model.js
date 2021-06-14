module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
    });
    User.associate = function(models) {
      User.hasMany(models.employees, { foreignKey: 'user_id' });
    }
    return User;
  };