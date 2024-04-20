module.exports = (sequelize, DataTypes) => {
  const TrainingFormat = sequelize.define("TrainingFormat", {
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

  TrainingFormat.associate = (models) => {
    TrainingFormat.belongsTo(models.TrainingFormatType, {
      foreignKey: 'training_format_type_id',
      as: "training_format_type"
    })
  }

  return TrainingFormat
}