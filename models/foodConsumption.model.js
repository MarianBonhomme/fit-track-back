module.exports = (sequelize, DataTypes) => {
  const FoodConsumption = sequelize.define("FoodConsumption", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    }),
    FoodConsumption.belongsTo(models.Profile, {
      foreignKey: 'profile_id',
      as: "profile"
    })
  }

  return FoodConsumption
}