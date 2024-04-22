const { Program } = require("../models");

const programController = {
  getAll: async (req, res) => {
    const { profileId } = req.params;
    try {
      const programs = await Program.findAll({
        where: { profile_id: profileId },
    });
      res.json(programs);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  updateOneById: async (req, res) => {
    const { id } = req.params;
    try {
      const [updatedRows] = await Program.update(req.body, {
        where: { id: id },
      });
      if (updatedRows > 0) {
        const updatedProgram = await Program.findOne({
          where: { id: id },
        });
        res.json(updatedProgram);
      } else {
        res.status(404).send(`Program with id ${id} not found`);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },
};

module.exports = programController