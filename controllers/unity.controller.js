const { Unity } = require("../models");

const unityController = {
  getAll: async (req, res) => {
    try {
      const unities = await Unity.findAll();
      res.json(unities);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },
};

module.exports = unityController;
