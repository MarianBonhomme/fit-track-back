const db = require('../models');
const foodsFixtures = require('../fixtures/foods.fixtures');
const foodConsumptionsFixtures = require('../fixtures/foodConsumptions.fixtures');

const loadFixtures = async () => {
  try {
    await db.sequelize.sync({ force: true });
    await db.Food.bulkCreate(foodsFixtures);
    await db.FoodConsumption.bulkCreate(foodConsumptionsFixtures);
    console.log('Fixtures loaded successfully.');
  } catch (error) {
    console.error('Error loading fixtures:', error);
  } finally {
    process.exit();
  }
};

loadFixtures();