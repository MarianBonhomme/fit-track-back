const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.get('/:id', userController.getOneById);
router.put('/:id', userController.updateOneById);

module.exports = router;