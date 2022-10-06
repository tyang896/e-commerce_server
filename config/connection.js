require('dotenv').config();
const Sequelize = require('sequelize');

//Create a connection object to connect to mysql
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
    //Add your mysql credentials in a new .env file
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
      // Database location
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    }
    );

module.exports = sequelize;
