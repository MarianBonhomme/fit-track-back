module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define("Profile", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pseudo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dark_theme: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }
  }, {
    timestamps: true,
    freezeTableName: true,
  })

  Profile.associate = (models) => {
    Profile.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    })
    Profile.belongsTo(models.Avatar, {
      foreignKey: 'avatar_id',
      as: 'avatar'
    })
    Profile.belongsTo(models.Color, {
      foreignKey: 'color_id',
      as: 'color',
    })
  }

  return Profile
}