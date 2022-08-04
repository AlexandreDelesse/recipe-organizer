module.exports = (sequelize, Sequelize) => {
  const serie = sequelize.define("serie", {
    weight: { type: Sequelize.INTEGER, defaultValue: 0 },
    reps: { type: Sequelize.INTEGER, defaultValue: null },
    duration: { type: Sequelize.INTEGER, defaultValue: null },
  });
  return serie;
};
