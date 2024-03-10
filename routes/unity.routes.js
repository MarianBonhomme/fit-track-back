const express = require('express');
const unityController = require('../controllers/unity.controller');

const router = express.Router();

router.get('/', unityController.getAll);

module.exports = router;