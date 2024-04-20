module.exports = (sequelize, DataTypes) => {
  const Training = sequelize.define("Training", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_done: {
      type: DataTypes.BOOLEAN,
      default: 0,
    },
    is_validate: {
      type: DataTypes.BOOLEAN,
      default: 0,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true
    },
    time: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reps: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    weightIncrement: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    timestamps: true,
    freezeTableName: true,
  })

  Training.associate = (models) => {
    Training.belongsTo(models.Program, {
      foreignKey: 'program_id',
      as: "program"
    })
  }

  return Training
}