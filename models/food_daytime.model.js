module.exports = (sequelize, DataTypes) => {
  const FoodDaytime = sequelize.define("Food_Daytime", {
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
    daytime_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Daytime',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    timestamps: true,
    freezeTableName: true,
  })

  FoodDaytime.assiociate = (models) => {
    FoodDaytime.belongsTo(models.Food, {
      foreignKey: 'food_id',
      as: "food"
    })
    FoodDaytime.belongsTo(models.Daytime, {
      foreignKey: 'daytime_id',
      as: "daytime"
    })
  }

  return FoodDaytime
}