const db = require('../models');

const colorsFixtures = require('../fixtures/colors.fixtures');
const avatarsFixtures = require('../fixtures/avatars.fixtures');
const usersFixtures = require('../fixtures/users.fixtures');
const profilesFixtures = require('../fixtures/profiles.fixtures');

const foodCategoriesFixtures = require('../fixtures/foodCategories.fixtures');
const foodsFixtures = require('../fixtures/foods.fixtures');

const programsFixtures = require('../fixtures/programs.fixtures');
const trainingsFixtures = require('../fixtures/trainings.fixtures');

const loadFixtures = async () => {
  try {
    await db.sequelize.sync({ force: true });

    await db.Color.bulkCreate(colorsFixtures);
    await db.Avatar.bulkCreate(avatarsFixtures);
    await db.User.bulkCreate(usersFixtures);
    await db.Profile.bulkCreate(profilesFixtures);

    await db.FoodCategory.bulkCreate(foodCategoriesFixtures);
    await db.Food.bulkCreate(foodsFixtures);

    await db.Program.bulkCreate(programsFixtures);
    await db.Training.bulkCreate(trainingsFixtures);
    console.log('Fixtures loaded successfully.');
  } catch (error) {
    console.error('Error loading fixtures:', error);
  } finally {
    process.exit();
  }
};

loadFixtures();