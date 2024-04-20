module.exports = (sequelize, DataTypes) => {
  const FoodCategory = sequelize.define("FoodCategory", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: true,
    freezeTableName: true,
  })

  return FoodCategory
}