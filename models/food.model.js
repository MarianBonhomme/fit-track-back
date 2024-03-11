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
  }, {
    timestamps: true,
    freezeTableName: true,
  })

  return Food
}