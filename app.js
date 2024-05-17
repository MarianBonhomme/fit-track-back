const express = require('express');
const cors = require("cors");
const app = express();
const compression = require('compression');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

// Routes
app.use('/uploads', express.static('uploads'));

const userRoutes = require('./routes/user.routes');
app.use('/user', userRoutes);

const profileRoutes = require('./routes/profile.routes');
app.use('/profile', profileRoutes);

const avatarRoutes = require('./routes/avatar.routes');
app.use('/avatar', avatarRoutes);

const colorRoutes = require('./routes/color.routes');
app.use('/color', colorRoutes);

const dayRoutes = require('./routes/day.routes');
app.use('/day', dayRoutes);

const foodRoutes = require('./routes/food.routes');
app.use('/food', foodRoutes);

const foodConsumptionRoutes = require('./routes/foodConsumption.routes');
app.use('/foodConsumption', foodConsumptionRoutes);

const programRoutes = require('./routes/program.routes');
app.use('/program', programRoutes);

const trainingRoutes = require('./routes/training.routes');
app.use('/training', trainingRoutes);

app.get('/health', (req, res) => {
  res.sendStatus(200);
});

// BDD
const db = require("./models");
const port = 3306;

const startServer = async () => {
  try {
    await db.sequelize.sync({ alter: true });
    app.listen(port, () => {
      console.log(`fitapp listening on port ${port}`);
    });
  } catch (error) {
    console.error('Erreur lors de la synchronisation de la base de données:', error);
    process.exit(1);
  }
};

startServer();