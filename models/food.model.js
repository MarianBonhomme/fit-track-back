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
    unity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Unity',
        key: 'id'
      }
    },
  }, {
    timestamps: true,
    freezeTableName: true,
  })

  Food.assiociate = (models) => {
    Food.belongsTo(models.Unity, {
      foreignKey: 'unity_id',
      as: "unity"
    })
  }

  return Food
}