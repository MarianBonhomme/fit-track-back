const { FoodConsumption, Food } = require("../models");

const foodConsumptionController = {
  getAll: async (req, res) => {
    const { profileId } = req.params;
    try {
      const foodConsumptions = await FoodConsumption.findAll({
        where: { profile_id: profileId },
        include: [
          {
            model: Food,
            as: 'food',
          }
        ]
      });
      res.json(foodConsumptions);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  addOne: async (req, res) => {
    const { food_id, quantity, date, profile_id } = req.body;
    const numericQuantity = parseInt(quantity, 10);

    try {
      const newFoodConsumption = await FoodConsumption.create({
        profile_id: profile_id,
        food_id: food_id,
        quantity: numericQuantity,
        date: date
      });

      const newFoodConsumptionWithFood = await FoodConsumption.findOne({
        where: { id: newFoodConsumption.id },
        include: [
          {
            model: Food,
            as: 'food',
          }
        ]
      });

      res.json(newFoodConsumptionWithFood);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  updateOneById: async (req, res) => {
    const { id } = req.params;
    try {
      const [updatedRows] = await FoodConsumption.update(req.body, {
        where: { id: id },
      });
      if (updatedRows > 0) {
        const updatedFood = await FoodConsumption.findOne({
          where: { id: id },
          include: [
            {
              model: Food,
              as: 'food',
            }
          ],
        });
        res.json(updatedFood);
      } else {
        res.status(404).send(`FoodConsumption with id ${id} not found`);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  deleteOneById: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedRows = await FoodConsumption.destroy({
        where: { id: id },
      });
      if (deletedRows > 0) {
        res.status(200).send("Deleted successfully");
      } else {
        res.status(404).send(`FoodConsumption with id ${id} not found`);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  countDistinctDates: async (req, res) => {
    const { profileId } = req.params
    try {
      const distinctDatesCount = await FoodConsumption.count({
        where: { profile_id: profileId },
        distinct: true,
        col: 'date'
      });

      res.send(distinctDatesCount.toString());
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  }

};

module.exports = foodConsumptionController;
