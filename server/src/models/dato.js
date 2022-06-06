const Sequelize = require("sequelize");
const db = require("../utils/db");

const Dato = db.define('Dato', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    ppm: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    umidita: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    temperatura: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    }
})

module.exports = Dato;