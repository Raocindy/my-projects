module.exports = (sequelize, Sequelize) => {
    const UserRole = sequelize.define("roles", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      }
    });
  
    return UserRole;
  };