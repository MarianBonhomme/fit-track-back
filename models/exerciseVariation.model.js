module.exports = (sequelize, DataTypes) => {
  const ExerciseVariation = sequelize.define("ExerciseVariation", {
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

  return ExerciseVariation
}