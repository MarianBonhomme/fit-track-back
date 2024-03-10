const express = require('express');
const foodConsumptionController = require('../controllers/foodConsumption.controller');

const router = express.Router();

router.get('/', foodConsumptionController.getAll);

module.exports = router;