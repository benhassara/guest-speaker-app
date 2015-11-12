'use strict';
module.exports = function(sequelize, DataTypes) {
  var Speaker = sequelize.define('Speaker', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    twitter: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    email: DataTypes.STRING,
    topic: DataTypes.STRING,
    speaking_date: DataTypes.DATE,
    github: DataTypes.STRING,
    votes: DataTypes.INTEGER,
    company: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Speaker;
};