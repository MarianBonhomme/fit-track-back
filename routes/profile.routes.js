const express = require('express');
const profileController = require('../controllers/profile.controller');

const router = express.Router();

router.get('/all/:userId', profileController.getAllByUserId);
router.get('/:id', profileController.getOneById);
router.put('/:id', profileController.updateOneById);

module.exports = router;