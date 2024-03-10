module.exports = (sequelize, DataTypes) => {
  const Daytime = sequelize.define("Daytime", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    timestamps: true,
    freezeTableName: true,
  })

  return Daytime
}