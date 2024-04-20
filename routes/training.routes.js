const express = require('express');
const trainingController = require('../controllers/training.controller');

const router = express.Router();

router.get('/:programid', trainingController.getAllByProgram);

module.exports = router;