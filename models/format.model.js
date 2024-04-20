module.exports = (sequelize, DataTypes) => {
  const Format = sequelize.define("Format", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    reps: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  }, {
    timestamps: true,
    freezeTableName: true,
  })

  Format.associate = (models) => {
    Format.belongsTo(models.FormatType, {
      foreignKey: 'format_type_id',
      as: "format_type"
    })
  }

  return Format
}