const db = require('../models')

const Workout = db.workout
const Activity = db.activity
const Serie = db.serie

exports.create = async (req, res) => {
  const newActivity = req.body
  const { workoutId } = newActivity

  if (!newActivity.exerciceId) {
    res.status(400).send({ message: 'Indiquez un exercice' })
    return
  }

  try {
    const workout = await Workout.findOne({ where: { id: workoutId } })
    if (!workout) {
      res.status(404).send({ message: 'Aucun workout avec cet ID' })
      return
    }

    const activity = await Activity.create(newActivity, {
      include: [{ model: Serie }],
    })
    res.status(200).send(activity)
  } catch (err) {
    res.status(500).send({ message: 'Failed to create activity', err })
  }
}

exports.findAll = async (req, res) => {
  try {
    const activity = await Activity.findAll({})
    res.status(200).send(activity)
  } catch (err) {
    res.status(500).send({ message: 'Failed to get all activities', err })
  }
}

exports.findById = async (req, res) => {
  const { id } = req.params

  try {
    const result = await Activity.findOne({
      where: { id },
    })
    if (!result) {
      res.status(404).send({ message: 'Not found' })
      return
    }
    res.status(200).send(result)
  } catch (err) {
    console.log(err)
    res.status(500).send({ message: 'Failed to get all Workouts', err })
  }
}

exports.deleteById = async (req, res) => {
  const { id } = req.params

  try {
    await Activity.destroy({
      where: { id },
      truncate: false,
    })
    res.sendStatus(200)
  } catch (err) {
    res.status(500).send({
      message: 'Failed to delete Activity with id : ' + id,
      err,
    })
  }
}

exports.updateById = async (req, res) => {
  newActivity = req.body
  const { id } = req.params

  try {
    const result = await Activity.update(newActivity, { where: { id } })
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send({ message: 'Failed to update Activity', err })
  }
}
