module.exports = (sequelize, DataTypes) => {
  const Training = sequelize.define("Training", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    is_validate: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    difficulty: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
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