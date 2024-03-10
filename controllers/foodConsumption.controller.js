const { FoodConsumption, Food } = require("../models");

const foodConsumptionController = {
  getAll: async (req, res) => {
    try {
      const foodConsumptions = await FoodConsumption.findAll({
        include: [
          {
            model: Food,
            as: 'food',
            attributes: ['name', 'kcal', 'prot', 'carb', 'fat']
          }
        ]
      });
      res.json(foodConsumptions);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },
};

module.exports = foodConsumptionController;
