const { FoodConsumption, Food, Day } = require("../models");

const foodConsumptionController = {
  getAll: async (req, res) => {
    const { userId } = req.params;
    try {
      const foodConsumptions = await FoodConsumption.findAll({
        include: [
          {
            model: Food,
            as: 'food',
          },
          {
            model: Day,
            as: 'day',
            where: {
              user_id: userId
            }
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
    const { food_id, quantity, day_id } = req.body;
    const numericQuantity = parseInt(quantity, 10);

    try {
      const newFoodConsumption = await FoodConsumption.create({
        food_id: food_id,
        day_id: day_id,
        quantity: numericQuantity,
      });

      const newFoodConsumptionWithFood = await FoodConsumption.findOne({
        where: { id: newFoodConsumption.id },
        include: [
          {
            model: Food,
            as: 'food',
          },
          {
            model: Day,
            as: 'day',
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
        const updatedFoodConsumption = await FoodConsumption.findOne({
          where: { id: id },
          include: [
            {
              model: Food,
              as: 'food',
            },
            {
              model: Day,
              as: 'day'
            }
          ],
        });
        res.json(updatedFoodConsumption);
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
    const { userId } = req.params
    try {
      const distinctDatesCount = await FoodConsumption.count({
        include: [{
          model: Day,
          as: 'day',
          where: {
            count_for_stats: true,
            user_id: userId
          }
        }],
        distinct: true,
        col: 'day_id'
      });

      res.send(distinctDatesCount.toString());
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  }

};

module.exports = foodConsumptionController;
