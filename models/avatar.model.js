module.exports = (sequelize, DataTypes) => {
  const Avatar = sequelize.define("Avatar", {
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
  }, {
    timestamps: true,
    freezeTableName: true,
  })

  return Avatar
}