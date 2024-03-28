const express = require('express');
const foodConsumptionController = require('../controllers/foodConsumption.controller');

const router = express.Router();

router.get('/', foodConsumptionController.getAll);
router.post('/', foodConsumptionController.addOne);
router.put('/:id', foodConsumptionController.updateOneById);
router.delete('/:id', foodConsumptionController.deleteOneById);
router.get('/datesCount', foodConsumptionController.countDistinctDates);

module.exports = router;