const db = require('../models');
const foodsFixtures = require('../fixtures/foods');
const unitiesFixtures = require('../fixtures/unities');

const loadFixtures = async () => {
  try {
    await db.sequelize.sync({ force: true });
    await db.Unity.bulkCreate(unitiesFixtures);
    await db.Food.bulkCreate(foodsFixtures);
    console.log('Fixtures loaded successfully.');
  } catch (error) {
    console.error('Error loading fixtures:', error);
  } finally {
    process.exit();
  }
};

loadFixtures();