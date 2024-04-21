const express = require('express');
const programController = require('../controllers/program.controller');

const router = express.Router();

router.get('/:profileid', programController.getAll);
router.put('/:id', programController.updateOneById);


module.exports = router;