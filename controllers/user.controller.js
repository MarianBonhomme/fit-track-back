const { User, Avatar, Color } = require('../models')

const userController = {
  signup: async (req, res) => {
    try {
      const { pseudo, password } = req.body;

      const existingUser = await User.findOne({ where: { pseudo } });
      if (existingUser) {
        return res.status(400).json({ error: 'Cet utilisateur existe déjà.' });
      }

      const newUser = await User.create({ 
        pseudo, 
        password,
        avatar_id: 1,
        color_id: 1,
      });

      const userWithDetails = await User.findOne({
        where: { id: newUser.id },
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

      res.json(userWithDetails);
    } catch (error) {
      console.error('Erreur lors de l\'inscription :', error);
      res.status(500).json({ error: 'Erreur lors de l\'inscription.' });
    }
  },

  signin: async (req, res) => {
    try {
      const { pseudo, password } = req.body;

      const user = await User.findOne({ 
        where: { pseudo },
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

      if (!user) {
        return res.status(404).json({ error: 'Utilisateur non trouvé.' });
      }

      if (user.password !== password) {
        return res.status(401).json({ error: 'Mot de passe incorrect.' });
      }

      res.json(user);
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      res.status(500).json({ error: 'Erreur lors de la connexion.' });
    }
  },

  getOneById: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findOne({
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

      if (user) {
        res.json(user)
      } else {
        res.status(404).send(`User with id ${id} not found`)
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  updateOneById: async (req, res) => {
    const { id } = req.params;
    try {      
      const [updatedRows] = await User.update(req.body, {
        where: { id: id },
      });
      if (updatedRows > 0) {
        const updatedUser = await User.findOne({ 
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
        return res.json(updatedUser);
      }

      res.status(404).send(`User with id ${id} not found`);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },
}

module.exports = userController