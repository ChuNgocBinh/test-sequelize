const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'Binhcn@1996', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize