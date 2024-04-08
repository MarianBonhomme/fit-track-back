module.exports = (sequelize, DataTypes) => {
  const Avatar = sequelize.define("Avatar", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true 
    },
    is_manageable: {
      type: DataTypes.BOOLEAN,
      default: 1,
    }
  }, {
    timestamps: true,
    freezeTableName: true,
  })

  return Avatar
}