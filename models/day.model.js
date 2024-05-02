module.exports = (sequelize, DataTypes) => {
  const Day = sequelize.define("Day", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    count_for_stats: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    }
  }, {
    timestamps: true,
    freezeTableName: true,
  })

  Day.associate = (models) => {
    Day.hasMany(models.FoodConsumption, {
      foreignKey: 'day_id',
      as: "foodConsumptions"
    }),
    Day.belongsTo(models.Profile, {
      foreignKey: 'profile_id',
      as: "profile"
    })
  }

  return Day
}