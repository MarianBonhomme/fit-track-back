module.exports = (sequelize, DataTypes) => {
  const WeightMeasurement = sequelize.define("WeightMeasurement", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    is_fasting: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: 1,
    }
  }, {
    timestamps: true,
    freezeTableName: true,
  })

  WeightMeasurement.associate = (models) => {
    WeightMeasurement.belongsTo(models.Profile, {
      foreignKey: 'profile_id',
      as: "profile"
    })
  }

  return WeightMeasurement
}