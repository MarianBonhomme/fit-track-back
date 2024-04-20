const { Program } = require("../models");

const programController = {
  getAll: async (req, res) => {
    const { profileid } = req.params;
    try {
      const programs = await Program.findAll({
        where: { profile_id: profileid },
    });
      res.json(programs);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },
};

module.exports = programController