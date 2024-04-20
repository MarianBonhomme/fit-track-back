module.exports = (sequelize, DataTypes) => {
  const Program = sequelize.define("Program", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_done: {
      type: DataTypes.BOOLEAN,
      default: 0,
    },
  }, {
    timestamps: true,
    freezeTableName: true,
  })

  Program.associate = (models) => {
    Program.belongsTo(models.TrainingFormat, {
      foreignKey: 'training_format_id',
      as: "training_format"
    })
    Program.belongsTo(models.ExerciseVariation, {
      foreignKey: 'exercise_variation_id',
      as: "exercise_variation"
    })
    Program.belongsTo(models.Profile, {
      foreignKey: 'profile_id',
      as: "profile"
    })
  }

  return Program
}