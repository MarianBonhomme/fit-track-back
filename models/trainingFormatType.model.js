module.exports = (sequelize, DataTypes) => {
  const TrainingFormatType = sequelize.define("TrainingFormatType", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    timestamps: true,
    freezeTableName: true,
  })

  return TrainingFormatType
}