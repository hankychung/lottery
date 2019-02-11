module.exports = process.env.NODE_ENV == 'development' ? require('./config/dev.config') : require('./config/dev.config')
