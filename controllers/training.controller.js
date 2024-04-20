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
};

module.exports = trainingController