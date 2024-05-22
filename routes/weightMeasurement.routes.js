const express = require('express');
const weightMeasurementController = require('../controllers/weightMeasurement.controller');

const router = express.Router();

router.get('/:profileId', weightMeasurementController.getAll);
router.post('/', weightMeasurementController.addOne);
router.put('/:id', weightMeasurementController.updateOneById);


module.exports = router;