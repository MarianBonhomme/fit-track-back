const { Food, FoodConsumption, Day } = require("../models");

const foodController = {
  getAllWithTotalQuantity: async (req, res) => {
    const { userId } = req.params
    try {
      const foods = await Food.findAll();

      const foodsWithTotalQuantity = await Promise.all(
        foods.map(async (food) => {
          const totalQuantity = await FoodConsumption.sum("quantity", {
            where: { 
              food_id: food.id,
            },
            include: [
              {
                model: Day,
                as: 'day',
                where: {
                  user_id: userId
                }
              }
            ]
          });

          const totalQuantityValidated = await FoodConsumption.sum("quantity", {
            where: { 
              food_id: food.id,
            },
            include: [{
              model: Day,
              as: 'day',
              where: {
                count_for_stats: true,
                user_id: userId,
              }
            }]
          });

          return {
            id: food.id,
            name: food.name,
            image: food.image,
            kcal: food.kcal,
            prot: food.prot,
            carb: food.carb,
            fat: food.fat,
            unity: food.unity,
            proportion: food.proportion,
            position: food.position,
            is_favorite: food.is_favorite,
            is_active: food.is_active,
            totalQuantity: totalQuantity || 0,
            totalQuantityValidated: totalQuantityValidated || 0,
          };
        })
      );

      res.json(foodsWithTotalQuantity);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  addOne: async (req, res) => {
    const { name, kcal, prot, carb, fat, unity, proportion, is_favorite } = req.body;

    const numericKcal = parseInt(kcal, 10);
    const numericProt = parseInt(prot, 10);
    const numericCarb = parseInt(carb, 10);
    const numericFat = parseInt(fat, 10);
    const numericProportion = parseInt(proportion, 10);

    try {
      let imagePath = null;
      if (req.file && req.file.path) {
        imagePath = req.file.path;
      }

      const newFood = await Food.create({
        name: name,
        image: imagePath,
        kcal: numericKcal,
        prot: numericProt,
        carb: numericCarb,
        fat: numericFat,
        unity: unity,
        is_favorite: is_favorite,
        proportion: numericProportion,
      });

      const newFoodWithTotalQuantity = {
        id: newFood.id,
        name: newFood.name,
        image: newFood.image,
        kcal: newFood.kcal,
        prot: newFood.prot,
        carb: newFood.carb,
        fat: newFood.fat,
        unity: newFood.unity,
        proportion: newFood.proportion,
        position: newFood.position,
        is_favorite: newFood.is_favorite,
        is_active: newFood.is_active,
        totalQuantity: 0,
        totalQuantityValidated: 0,
      }

      res.json(newFoodWithTotalQuantity);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  updateOneById: async (req, res) => {
    const { id, userId } = req.params;
    try {
      let updatedFood;

      if (req.file && req.file.path) {
        const imagePath = req.file.path;
        const [updatedRows] = await Food.update(
          { ...req.body, image: imagePath },
          { where: { id: id } }
        );
        if (updatedRows > 0) {
          updatedFood = await Food.findOne({ where: { id: id } });

          const totalQuantity = await FoodConsumption.sum("quantity", {
            where: { 
              food_id: updatedFood.id,
            },
            include: [
              {
                model: Day,
                as: 'day',
                where: {
                  user_id: userId
                }
              }
            ]
          });

          const totalQuantityValidated = await FoodConsumption.sum("quantity", {
            where: { 
              food_id: updatedFood.id,
            },
            include: [{
              model: Day,
              as: 'day',
              where: {
                count_for_stats: true,
                user_id: userId,
              }
            }]
          });

          const updatedFoodWithTotalQuantity = {
            id: updatedFood.dataValues.id,
            name: updatedFood.dataValues.name,
            image: updatedFood.dataValues.image,
            kcal: updatedFood.dataValues.kcal,
            prot: updatedFood.dataValues.prot,
            carb: updatedFood.dataValues.carb || 0,
            fat: updatedFood.dataValues.fat || 0,
            unity: updatedFood.dataValues.unity || "Gram",
            proportion: updatedFood.dataValues.proportion || 1,
            is_favorite: updatedFood.dataValues.is_favorite || false,
            is_active: updatedFood.dataValues.is_active || true,
            createdAt: updatedFood.dataValues.createdAt,
            updatedAt: updatedFood.dataValues.updatedAt,
            totalQuantity: totalQuantity || 0,
            totalQuantityValidated: totalQuantityValidated || 0
          };

          return res.json(updatedFoodWithTotalQuantity);
        }
      } else {
        const [updatedRows] = await Food.update(req.body, {
          where: { id: id },
        });
        if (updatedRows > 0) {
          updatedFood = await Food.findOne({ where: { id: id } });

          const totalQuantity = await FoodConsumption.sum("quantity", {
            where: { 
              food_id: updatedFood.id,
            },
            include: [
              {
                model: Day,
                as: 'day',
                where: {
                  user_id: userId
                }
              }
            ]
          });

          const totalQuantityValidated = await FoodConsumption.sum("quantity", {
            where: { 
              food_id: updatedFood.id,
            },
            include: [{
              model: Day,
              as: 'day',
              where: {
                count_for_stats: true,
                user_id: userId,
              }
            }]
          });

          const updatedFoodWithTotalQuantity = {
            id: updatedFood.dataValues.id,
            name: updatedFood.dataValues.name,
            image: updatedFood.dataValues.image,
            kcal: updatedFood.dataValues.kcal,
            prot: updatedFood.dataValues.prot,
            carb: updatedFood.dataValues.carb || 0,
            fat: updatedFood.dataValues.fat || 0,
            unity: updatedFood.dataValues.unity || "Gram",
            proportion: updatedFood.dataValues.proportion || 1,
            is_favorite: updatedFood.dataValues.is_favorite || false,
            is_active: updatedFood.dataValues.is_active || true,
            createdAt: updatedFood.dataValues.createdAt,
            updatedAt: updatedFood.dataValues.updatedAt,
            totalQuantity: totalQuantity || 0,
            totalQuantityValidated: totalQuantityValidated || 0
          };

          return res.json(updatedFoodWithTotalQuantity);
        }
      }

      res.status(404).send(`Food with id ${id} not found`);
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
