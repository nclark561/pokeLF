const Sequelize = require('sequelize')
require('dotenv').config()
const { CONNECTION_STRING } = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    createAccount: async (req, res) => {
        let maBod = req.body

        sequelize.query(`
        INSERT INTO users (email, password)
        VALUES ('${maBod.email}', '${maBod.password}');
        `)
        .then(dbRes => res.sendStatus(200))
        .catch(err => console.log(err))
    }
}