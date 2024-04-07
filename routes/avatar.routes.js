const express = require('express');
const avatarController = require('../controllers/avatar.controller');

const router = express.Router();

const upload = require('../configs/multer.config');

router.get('/', avatarController.getAll);
router.get('/:id', avatarController.getOneById);
router.post('/', upload('avatars').single('image'), avatarController.addOne);

module.exports = router;