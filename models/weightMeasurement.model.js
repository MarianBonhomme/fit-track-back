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
    weight_value: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
  }, {
    timestamps: true,
    freezeTableName: true,
  })

  WeightMeasurement.associate = (models) => {
    WeightMeasurement.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: "user"
    })
  }

  return WeightMeasurement
}