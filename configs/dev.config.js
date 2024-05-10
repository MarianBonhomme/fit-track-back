module.exports = {
  port: process.env.PORT || 3000,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'fittrack',
  host: process.env.DB_HOST || 'localhost',
  dialect: "mysql"
};