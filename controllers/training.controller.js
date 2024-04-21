const { Training } = require("../models");

const trainingController = {
  getAllByProgram: async (req, res) => {
    const { programid } = req.params;
    try {
      const trainings = await Training.findAll({
        where: { program_id: programid },
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
};

module.exports = trainingController