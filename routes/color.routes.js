const express = require('express');
const colorController = require('../controllers/color.controller');

const router = express.Router();

router.get('/', colorController.getAll);
router.get('/:id', colorController.getOneById);
router.post('/', colorController.addOne);

module.exports = router;