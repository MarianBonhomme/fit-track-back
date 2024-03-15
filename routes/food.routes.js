const express = require('express');
const foodController = require('../controllers/food.controller');

const router = express.Router();

router.get('/', foodController.getAll);
router.get('/totalQuantity', foodController.getAllWithTotalQuantity);
router.get('/:id', foodController.getOneById);
router.post('/', foodController.addOne);
router.put('/:id', foodController.updateOneById);
router.delete('/:id', foodController.deleteOneById);

module.exports = router;