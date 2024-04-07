const { User } = require('../models')

const userController = {
  signup: async (req, res) => {
    try {
      const { pseudo, password } = req.body;

      // Vérifier si l'utilisateur existe déjà
      const existingUser = await User.findOne({ where: { pseudo } });
      if (existingUser) {
        return res.status(400).json({ error: 'Cet utilisateur existe déjà.' });
      }

      // Créer un nouvel utilisateur
      const newUser = await User.create({ pseudo, password });

      res.json(newUser);
    } catch (error) {
      console.error('Erreur lors de l\'inscription :', error);
      res.status(500).json({ error: 'Erreur lors de l\'inscription.' });
    }
  },

  signin: async (req, res) => {
    try {
      const { pseudo, password } = req.body;

      // Trouver l'utilisateur correspondant au pseudo donné
      const user = await User.findOne({ where: { pseudo } });
      if (!user) {
        return res.status(404).json({ error: 'Utilisateur non trouvé.' });
      }

      // Vérifier le mot de passe
      if (user.password !== password) {
        return res.status(401).json({ error: 'Mot de passe incorrect.' });
      }

      // Authentification réussie
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
        const updatedUser = await User.findOne({ where: { id: id } });
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