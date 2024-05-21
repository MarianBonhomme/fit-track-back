const express = require('express');
const weightMeasurementController = require('../controllers/weightMeasurement.controller');

const router = express.Router();

router.get('/:profileId', weightMeasurementController.getAll);

module.exports = router;