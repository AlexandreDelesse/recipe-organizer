module.exports = (sequelize, Sequelize) => {
  const training = sequelize.define("training", {
    name: { type: Sequelize.STRING },
    isModel: { type: Sequelize.BOOLEAN, defaultValue: false },
    userId: { type: Sequelize.STRING },
    date: { type: Sequelize.STRING, defaultValue: null },
  });
  return training;
};
