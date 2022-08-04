function applyExtraSetup(sequelize) {
  const { training, activity, serie, exercice, user } = sequelize.models;

  training.hasMany(activity);

  activity.hasMany(serie);
  activity.hasOne(exercice);
}

module.exports = { applyExtraSetup };
