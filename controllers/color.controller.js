const { Color } = require("../models");

const colorController = {
  getAll: async (req, res) => {
    try {
      const colors = await Color.findAll();
      res.json(colors);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  getOneById: async (req, res) => {
    const { id } = req.params;
    try {
      const color = await Color.findOne({
        where: { id: id },
      });

      if (color) {
        res.json(color);
      } else {
        res.status(404).send(`Color with id ${id} not found`);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  addOne: async (req, res) => {
    const newColor = req.body;

    try {
      const createdColor = await Color.create({
        hexa: newColor.hexa,
      });

      res.json(createdColor);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },
};

module.exports = colorController;
