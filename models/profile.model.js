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
    dailyKcal: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dailyCarb: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dailyProt: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dailyFat: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
    Profile.hasMany(models.Program, {
      foreignKey: 'profile_id',
      as: 'programs'
    });
  }

  return Profile
}