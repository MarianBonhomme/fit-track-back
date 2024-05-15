const { Profile, Avatar, Color } = require('../models')

const profileController = {
  getAllByUserId: async (req, res) => {
    const { userId } = req.params;
    try {
      const profiles = await Profile.findAll({
        where: { user_id: userId },
        include: [
          {
            model: Avatar,
            as: 'avatar',
          },
          {
            model: Color,
            as: 'color',
          }
        ]
      })
      if (profiles) {
        res.json(profiles)
      } else {
        res.status(404).send(`Profiles with user_id ${id} not found`)
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  getOneById: async (req, res) => {
    const { id } = req.params;
    try {
      const profile = await Profile.findOne({
        where: { id: id },
        include: [
          {
            model: Avatar,
            as: 'avatar',
          },
          {
            model: Color,
            as: 'color',
          }
        ]
      });

      if (profile) {
        res.json(profile)
      } else {
        res.status(404).send(`Profile with id ${id} not found`)
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  updateOneById: async (req, res) => {
    const { id } = req.params;
    try {      
      const [updatedRows] = await Profile.update(req.body, {
        where: { id: id },
      });
      if (updatedRows > 0) {
        const updatedProfile = await Profile.findOne({ 
          where: { id: id },
          include: [
            {
              model: Avatar,
              as: 'avatar',
            },
            {
              model: Color,
              as: 'color',
            }
          ]
        });
        return res.json(updatedProfile);
      }

      res.status(404).send(`Profile with id ${id} not found`);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },
}

module.exports = profileController