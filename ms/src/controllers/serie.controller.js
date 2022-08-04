const db = require('../models')

const Workout = db.workout
const Activity = db.activity
const Serie = db.serie

exports.create = async (req, res) => {
  const newSerie = req.body
  const { activityId } = newSerie

  try {
    const result = await Serie.findOne({ where: { id: activityId } })
    if (!result) {
      res.status(404).send({ message: 'Aucune activité avec cet ID' })
      return
    }

    const serie = await Serie.create(newSerie)
    res.status(200).send(serie)
  } catch (err) {
    res.status(500).send({ message: 'Failed to create activity', err })
  }
}

exports.findAll = async (req, res) => {
  try {
    const series = await Serie.findAll({})
    res.status(200).send(series)
  } catch (err) {
    res.status(500).send({ message: 'Failed to get all series', err })
  }
}

exports.findById = async (req, res) => {
  const { id } = req.params

  try {
    const result = await Serie.findOne({
      where: { id },
    })
    if (!result) {
      res.status(404).send({ message: 'Not found' })
      return
    }
    res.status(200).send(result)
  } catch (err) {
    console.log(err)
    res.status(500).send({ message: 'Failed to get Serie', err })
  }
}

exports.deleteById = async (req, res) => {
  const { id } = req.params

  try {
    await Serie.destroy({
      where: { id },
      truncate: false,
    })
    res.sendStatus(200)
  } catch (err) {
    res.status(500).send({
      message: 'Failed to delete Serie with id : ' + id,
      err,
    })
  }
}

exports.updateById = async (req, res) => {
  newSerie = req.body
  const { id } = req.params

  try {
    const result = await Serie.update(newSerie, { where: { id } })
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send({ message: 'Failed to update Activity', err })
  }
}
