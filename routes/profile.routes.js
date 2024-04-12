const express = require('express');
const profileController = require('../controllers/profile.controller');

const router = express.Router();

router.get('/all/:userid', profileController.getAllByUserId);
router.get('/:id', profileController.getOneById);
router.put('/:id', profileController.updateOneById);

module.exports = router;