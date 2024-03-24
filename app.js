const express = require('express');
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/uploads', express.static('uploads'));

const foodRoutes = require('./routes/food.routes');
app.use('/food', foodRoutes);

const foodConsumptionRoutes = require('./routes/foodConsumption.routes');
app.use('/foodConsumption', foodConsumptionRoutes);

// BDD
const db = require("./models");
const port = 3000;
const startServer = async () => {
  try {
    await db.sequelize.sync({ alter: true });
    app.listen(port, () => {
      console.log(`fitapp listening on port ${port}`);
    });
  } catch (error) {
    console.error('Erreur lors de la synchronisation de la base de données:', error);
  }
};

startServer();