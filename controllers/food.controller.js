const { Food } = require("../models");

const foodController = {
  getAll: async (req, res) => {
    try {
      const foods = await Food.findAll();
      res.json(foods);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  getOneById: async (req, res) => {
    const { id } = req.params;
    try {
      const food = await Food.findOne({
        where: { id: id },
      });

      if (food) {
        res.json(food);
      } else {
        res.status(404).send(`Food with id ${id} not found`);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Erreur serveur");
    }
  },

  addOne: async (req, res) => {
    const { name, id, kcal, prot, carb, fat, unity, proportion } = req.body;

    const numericKcal = parseInt(kcal, 10);
    const numericProt = parseInt(prot, 10);
    const numericCarb = parseInt(carb, 10);
    const numericFat = parseInt(fat, 10);
    const numericProportion = parseInt(proportion, 10);

    try {
      const newFood = await Food.create({
        name: name,
        id: id,
        kcal: numericKcal,
        prot: numericProt,
        carb: numericCarb,
        fat: numericFat,
        unity_id: unity,
        proportion: numericProportion
      });

      res.json(newFood);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  updateOneById: async (req, res) => {
    const { id } = req.params;
    try {
      const [updatedRows] = await Food.update(req.body, {
        where: { id: id },
      });
      if (updatedRows > 0) {
        const updatedFood = await Food.findOne({
          where: { id: id },
        });
        res.json(updatedFood);
      } else {
        res.status(404).send(`Food with id ${id} not found`);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  deleteOneById: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedRows = await Food.destroy({
        where: { id: id },
      });
      if (deletedRows > 0) {
        res.status(200).send("Deleted successfully");
      } else {
        res.status(404).send(`Food with id ${id} not found`);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },
};

module.exports = foodController;
