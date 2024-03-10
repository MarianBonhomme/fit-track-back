module.exports = (sequelize, DataTypes) => {
  const Unity = sequelize.define("Unity", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    timestamps: true,
    freezeTableName: true,
  })

  return Unity
}