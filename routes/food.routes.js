const express = require('express');
const foodController = require('../controllers/food.controller');

const router = express.Router();

const upload = require('../configs/multer.config');

router.get('/:profileId', foodController.getAllWithTotalQuantity);
router.post('/', upload('foods').single('image'), foodController.addOne);
router.put('/:id/:profileId', upload('foods').single('image'), foodController.updateOneById);
router.delete('/:id', foodController.deleteOneById);

module.exports = router;