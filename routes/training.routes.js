const express = require('express');
const trainingController = require('../controllers/training.controller');

const router = express.Router();

router.get('/:userId', trainingController.getAll);
router.get('/program/:programId', trainingController.getAllByProgram);
router.put('/:id', trainingController.updateOneById);
router.post('/', trainingController.addOne);
router.delete('/:id', trainingController.deleteOneById);

module.exports = router;