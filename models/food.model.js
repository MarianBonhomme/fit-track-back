module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define("Food", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true 
    },
    kcal: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prot: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    carb: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unity: {
      type: DataTypes.ENUM('Gram', 'Litre', 'Portion'),
      allowNull: false,
    },
    proportion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_favorite: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: 1
    },
    is_manageable: {
      type: DataTypes.BOOLEAN,
      default: 1,
    }
  }, {
    timestamps: true,
    freezeTableName: true,
  })

  Food.associate = (models) => {
    Food.belongsTo(models.FoodCategory, {
      foreignKey: 'food_category_id',
      as: "food_category"
    })
  }

  return Food
}