const { Day } = require("../models");
const moment = require("moment")

const dayController = {
  getAll: async (req, res) => {
    const { userId } = req.params 
    try {
      const days = await Day.findAll({
        where: {
          user_id: userId
        }
      });
      const sortedDays = days.sort((a, b) => moment(a.date, 'YYYY-MM-DD').diff(moment(b.date, 'YYYY-MM-DD')));   
      res.json(sortedDays);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  getOneById: async (req, res) => {
    const { id } = req.params;
    try {
      const day = await Day.findOne({
        where: { id: id },
      });

      if (day) {
        res.json(day);
      } else {
        res.status(404).send(`Day with id ${id} not found`);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  getOneByDateAndUserId: async (req, res) => {
    const { date, userId } = req.params;
    try {
      const localDate = moment.tz(date, 'Europe/Paris').format('YYYY-MM-DD');
      const day = await Day.findOne({
        where: { 
          date: localDate,
          user_id: userId
        },
      });
      res.json(day);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  updateOneById: async (req, res) => {
    const { id } = req.params;
    try {
      const [updatedRows] = await Day.update(req.body, {
        where: { id: id },
      });
      if (updatedRows > 0) {
        const updatedDay = await Day.findOne({
          where: { id: id },
        });
        res.json(updatedDay);
      } else {
        res.status(404).send(`Day with id ${id} not found`);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  addOne: async (req, res) => {
    const { date, user_id } = req.body;
    try {
      const localDate = moment.tz(date, 'Europe/Paris').format('YYYY-MM-DD');
      const createdDay = await Day.create({
        date: localDate,
        user_id: user_id,
      });

      res.json(createdDay);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  deleteOneById: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedRows = await Day.destroy({
        where: { id: id },
      });
      if (deletedRows > 0) {
        res.status(200).send("Deleted successfully");
      } else {
        res.status(404).send(`Day with id ${id} not found`);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },
};

module.exports = dayController;
