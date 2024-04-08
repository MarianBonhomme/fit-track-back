const db = require('../models');
const colorsFixtures = require('../fixtures/colors.fixtures');
const avatarsFixtures = require('../fixtures/avatars.fixtures');
const usersFixtures = require('../fixtures/users.fixtures');
const foodsFixtures = require('../fixtures/foods.fixtures');

const loadFixtures = async () => {
  try {
    await db.sequelize.sync({ force: true });
    await db.Color.bulkCreate(colorsFixtures);
    await db.Avatar.bulkCreate(avatarsFixtures);
    await db.User.bulkCreate(usersFixtures);
    await db.Food.bulkCreate(foodsFixtures);
    console.log('Fixtures loaded successfully.');
  } catch (error) {
    console.error('Error loading fixtures:', error);
  } finally {
    process.exit();
  }
};

loadFixtures();