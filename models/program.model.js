module.exports = (sequelize, DataTypes) => {
  const Program = sequelize.define("Program", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
    is_favorite: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0,
    },
    pattern: {
      type: DataTypes.ENUM('push', 'pull', 'legs', 'abs', 'cardio'),
      allowNull: false,
    },
  }, {
    timestamps: true,
    freezeTableName: true,
  })

  Program.associate = (models) => {
    Program.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: "user"
    })
    Program.hasMany(models.Training, {
      foreignKey: 'program_id',
      as: 'trainings'
    });
  }

  return Program
}