const { Avatar } = require("../models");

const avatarController = {
  getAll: async (req, res) => {
    try {
      const avatars = await Avatar.findAll();
      res.json(avatars);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  getOneById: async (req, res) => {
    const { id } = req.params;
    try {
      const avatar = await Avatar.findOne({
        where: { id: id },
      });

      if (avatar) {
        res.json(avatar);
      } else {
        res.status(404).send(`Avatar with id ${id} not found`);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  addOne: async (req, res) => {
    const newAvatar = req.body;

    try {
      let imagePath = null;
      if (req.file && req.file.path) {
        imagePath = req.file.path;
      }

      const createdAvatar = await Avatar.create({
        name: newAvatar.name,
        image: imagePath,
      });

      res.json(createdAvatar);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },
};

module.exports = avatarController;
