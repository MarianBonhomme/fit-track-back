const express = require('express');
const dayController = require('../controllers/day.controller');

const router = express.Router();

router.get('/', dayController.getAll);
router.get('/:id', dayController.getOneById);
router.get('/date/:date', dayController.getOneByDate);
router.post('/', dayController.addOne);
router.put('/:id', dayController.updateOneById);
router.delete('/:id', dayController.deleteOneById);

module.exports = router;