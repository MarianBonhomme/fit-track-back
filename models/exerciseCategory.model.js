module.exports = (sequelize, DataTypes) => {
  const ExerciseCategory = sequelize.define("ExerciseCategory", {
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

  return ExerciseCategory
}