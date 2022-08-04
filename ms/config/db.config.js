module.exports = {
    HOST: process.env.DB_HOST || 'localhost',
    PORT: process.env.DB_PORT || '3306',
    USER: process.env.DB_USER || 'root',
    PASSWORD: process.env.DB_PWD || 'recipe_organizer_pwd',
    DB: process.env.DB_NAME || 'recipe_organizer',
    dialect: 'mysql',
    timezone: '+01:00',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }