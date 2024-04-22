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
    starting_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    ended_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    ended_reason: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_favorite: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0,
    },
  }, {
    timestamps: true,
    freezeTableName: true,
  })

  Program.associate = (models) => {
    Program.belongsTo(models.Profile, {
      foreignKey: 'profile_id',
      as: "profile"
    })
    Program.hasMany(models.Training, {
      foreignKey: 'program_id',
      as: 'trainings'
    });
  }

  return Program
}