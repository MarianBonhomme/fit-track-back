const { WeightMeasurement } = require("../models");
const moment = require("moment")

const weightMeasurementController = {
  getAll: async (req, res) => {
    const { profileId } = req.params;
    try {
      const weightMeasurements = await WeightMeasurement.findAll({
        where: {profile_id: profileId},
        order: [['date', 'ASC']]
      });
      res.json(weightMeasurements);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  addOne: async (req, res) => {
    const { weight_value, date, is_fasting, profile_id } = req.body;
    const numericWeightValue = parseFloat(weight_value, 10)

    try {
      const localDate = moment.tz(date, 'Europe/Paris').format('YYYY-MM-DD');
      const newWeightMeasurement = await WeightMeasurement.create({
        
        weight_value: numericWeightValue,
        date: localDate,
        is_fasting: is_fasting,
        profile_id: profile_id
      });

      res.json(newWeightMeasurement);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  updateOneById: async (req, res) => {
    const { id } = req.params;
    try {
      const [updatedRows] = await WeightMeasurement.update(req.body, {
        where: { id: id },
      });
      if (updatedRows > 0) {
        const updatedWeightMeasurement = await WeightMeasurement.findOne({
          where: { id: id },
        });
        res.json(updatedWeightMeasurement);
      } else {
        res.status(404).send(`WeightMeasurement with id ${id} not found`);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  deleteOneById: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedRows = await WeightMeasurement.destroy({
        where: { id: id },
      });
      if (deletedRows > 0) {
        res.status(200).send("Deleted successfully");
      } else {
        res.status(404).send(`WeightMeasurement with id ${id} not found`);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

};

module.exports = weightMeasurementController;
