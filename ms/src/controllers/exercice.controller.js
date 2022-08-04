const db = require("../models");

const Exercice = db.exercice;

exports.create = async (req, res) => {
  const exercice = req.body;
  try {
    const result = await Exercice.create(exercice);
    res.status(201).send(result);
  } catch (err) {
    res.status(500).send({ message: "Failed to create Exercice", err });
  }
};

exports.findAll = async (req, res) => {
  try {
    const result = await Exercice.findAll();
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Failed to get all Exercices", err });
  }
};

exports.findById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Exercice.findOne({
      where: { id },
    });
    if (!result) {
      res.status(404).send({ message: "Not found" });
      return;
    }
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Failed to get Exercice", err });
  }
};

exports.updateById = async (req, res) => {
  newExercice = req.body;
  const { id } = req.params;

  try {
    const result = await Exercice.update(newExercice, { where: { id } });
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ message: "Failed to update Exercice", err });
  }
};

exports.deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    await Exercice.destroy({
      where: { id },
      truncate: false,
    });
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send({
      message: "Failed to delete Exercice with id : " + id,
      err,
    });
  }
};
