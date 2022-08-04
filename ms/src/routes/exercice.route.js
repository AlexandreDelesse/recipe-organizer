const exercice = require("../controllers/exercice.controller");

module.exports = (app) => {
  const router = require("express").Router();

  // Exercice
  router.post("/exercices", exercice.create);

  app.use("/api", router);
};
