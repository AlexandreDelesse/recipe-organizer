const training = require("../controllers/training.controller");

module.exports = (app) => {
  const router = require("express").Router();

  // Training
  router.post("/trainings", training.create);
  router.get("/trainings", training.findAll);

  app.use("/api", router);
};
