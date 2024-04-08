module.exports = (sequelize, DataTypes) => {
  const Color = sequelize.define("Color", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    hexa: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_manageable: {
      type: DataTypes.BOOLEAN,
      default: 1,
    }
  }, {
    timestamps: true,
    freezeTableName: true,
  })

  return Color
}