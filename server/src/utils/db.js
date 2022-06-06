const Sequelize = require("sequelize");


const db = new Sequelize('heroku_86cd2b573e75516', 'bfc128fc6bc414', 'a90d3d08', {
    host: 'eu-cdbr-west-02.cleardb.net',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
  });

module.exports = db;