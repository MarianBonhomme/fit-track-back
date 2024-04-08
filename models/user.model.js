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
    isDarkTheme: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }
  }, {
    timestamps: true,
    freezeTableName: true,
  })

  User.associate = (models) => {
    User.belongsTo(models.Avatar, {
      foreignKey: 'avatar_id',
      as: 'avatar'
    })
    User.belongsTo(models.Color, {
      foreignKey: 'color_id',
      as: 'color',
    })
  }

  return User
}