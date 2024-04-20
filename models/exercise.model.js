module.exports = (sequelize, DataTypes) => {
  const Exercise = sequelize.define("Exercise", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_favorite: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
  }, {
    timestamps: true,
    freezeTableName: true,
  })

  Exercise.associate = (models) => {
    Exercise.belongsTo(models.ExerciseCategory, {
      foreignKey: 'exercise_category_id',
      as: "exercise_category"
    })
  }

  return Exercise
}