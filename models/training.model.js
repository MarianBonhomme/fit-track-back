module.exports = (sequelize, DataTypes) => {
  const Training = sequelize.define("Training", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    is_validate: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0,
    },
    is_last: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    predicted_increment: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true
    },
    time: {
      type: DataTypes.STRING,
      allowNull: true
    },
    reps: {
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