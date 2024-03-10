module.exports = (sequelize, DataTypes) => {
  const FoodConsumption = sequelize.define("FoodConsumption", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 
    food_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Food',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  }, {
    timestamps: true,
    freezeTableName: true,
  })

  FoodConsumption.associate = (models) => {
    FoodConsumption.belongsTo(models.Food, {
      foreignKey: 'food_id',
      as: "food"
    })
  }

  return FoodConsumption
}