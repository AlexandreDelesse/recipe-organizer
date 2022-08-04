module.exports = (sequelize, Sequelize) => {
  const exercice = sequelize.define("exercice", {
    name: { type: Sequelize.STRING },
  });
  return exercice;
};
