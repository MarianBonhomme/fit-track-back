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
    },
    dailyKcal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      default: 0,
    },
    dailyCarb: {
      type: DataTypes.INTEGER,
      allowNull: true,
      default: 0,
    },
    dailyProt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      default: 0,
    },
    dailyFat: {
      type: DataTypes.INTEGER,
      allowNull: true,
      default: 0,
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
    User.hasMany(models.Program, {
      foreignKey: 'user_id',
      as: 'programs'
    });
  }

  return User
}