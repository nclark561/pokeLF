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
        .catch(err => {
            res.sendStatus(400)
            console.log(err)
        })
    },

    getId: (req, res) => {
        let email = req.params.email

        sequelize.query(`
        SELECT *
        FROM users
        WHERE email = '${email}';
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    }
}