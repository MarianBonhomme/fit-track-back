const { Training, Program } = require("../models");

const trainingController = {
  getAll: async (req, res) => {
    const { profileId } = req.params;
    try {
      const programs = await Program.findAll({
        where: { profile_id: profileId },
        include: [{
          model: Training,
          as: 'trainings'
        }]
      });
      console
      let trainings = [];
      programs.forEach(program => {
        trainings = trainings.concat(program.trainings);
      });
      res.json(trainings);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  getAllByProgram: async (req, res) => {
    const { programId } = req.params;
    try {
      const trainings = await Training.findAll({
        where: { program_id: programId },
    });
      res.json(trainings);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  updateOneById: async (req, res) => {
    const { id } = req.params;
    try {
      const [updatedRows] = await Training.update(req.body, {
        where: { id: id },
      });
      if (updatedRows > 0) {
        const updatedTraining = await Training.findOne({
          where: { id: id },
        });
        res.json(updatedTraining);
      } else {
        res.status(404).send(`Training with id ${id} not found`);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  addOne: async (req, res) => {
    const newTraining = req.body;
    try {
      const createdTraining = await Training.create(newTraining);
      res.json(createdTraining);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },
};

module.exports = trainingController