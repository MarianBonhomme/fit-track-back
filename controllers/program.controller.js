const { Program, Training } = require("../models");

const programController = {
  getAll: async (req, res) => {
    const { profileId } = req.params;
    try {
      const programs = await Program.findAll({
        where: { profile_id: profileId },
        include: [{
          model: Training,
          as: 'trainings',
        }]
      });

      programs.forEach(program => {
        program.trainings.sort((a, b) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return dateA - dateB;
        });
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

  addOne: async (req, res) => {
    const newProgram = req.body;
    try {
      const createdProgram = await Program.create(newProgram);
      res.json(createdProgram);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },
  
  deleteOneById: async (req, res) => {
    const { id } = req.params;
    try {
      await Training.destroy({
        where: { program_id: id },
      });
      const deletedRows = await Program.destroy({
        where: { id: id },
      });
      if (deletedRows > 0) {
        res.status(200).send("Deleted successfully");
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