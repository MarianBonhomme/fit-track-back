const { WeightMeasurement } = require("../models");

const weightMeasurementController = {
  getAll: async (req, res) => {
    const { profileId } = req.params;
    try {
      const weightMeasurements = await WeightMeasurement.findAll({
        where: {profile_id: profileId}
      });
      res.json(weightMeasurements);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  },

  addOne: async (req, res) => {
    const weightMeasurementToAdd = req.body;

    try {
      const newWeightMeasurement = await WeightMeasurement.create({
        weight_value: weightMeasurementToAdd.weightValue,
        date: weightMeasurementToAdd.date,
        is_fasting: weightMeasurementToAdd.isFasting,
      });

      res.json(newWeightMeasurement);
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
