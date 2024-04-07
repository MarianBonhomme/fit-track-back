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
  }, {
    timestamps: true,
    freezeTableName: true,
  })

  return Color
}