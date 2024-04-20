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
    is_finished: {
      type: DataTypes.BOOLEAN,
      default: 0,
    },
    finished_reason: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    timestamps: true,
    freezeTableName: true,
  })

  Program.associate = (models) => {
    Program.belongsTo(models.Exercise, {
      foreignKey: 'exercise_id',
      as: "exercise"
    })
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