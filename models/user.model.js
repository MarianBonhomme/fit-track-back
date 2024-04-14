module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pseudo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    dark_mode: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: 0,
    }
  }, {
    timestamps: true,
    freezeTableName: true,
  })

  return User
}