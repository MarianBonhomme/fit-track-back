const env = process.env.NODE_ENV || 'development';
const config = env === 'production' ? require('./prod.config') : require('./dev.config');
module.exports = config;