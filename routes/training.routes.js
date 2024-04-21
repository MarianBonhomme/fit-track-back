const express = require('express');
const trainingController = require('../controllers/training.controller');

const router = express.Router();

router.get('/:profileid', trainingController.getAll);
router.get('/program/:programid', trainingController.getAllByProgram);
router.put('/:id', trainingController.updateOneById);

module.exports = router;