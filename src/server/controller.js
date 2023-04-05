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
        INSERT INTO users (email)
        VALUES ('${maBod.email}');
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
    },

    getPokemon: (req, res) => {
        let id = req.params.id
        
        sequelize.query(`
            SELECT * FROM pokemon
            WHERE trainer_id = ${id};

            SELECT * FROM wishlist
            WHERE user_id = ${id};
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => {
            console.log(err)
            res.sendStatus(400)
        })
    },

    deletePokemon: (req, res) => {
        let id = req.params.id

        sequelize.query(`
            DELETE
            FROM pokemon
            WHERE pokemon_id = ${id};
        `)
        .then(dbRes => res.sendStatus(200))
        .catch(err => console.log(err))
    },

    deleteWish: (req, res) => {
        let id = req.params.id

        sequelize.query(`
            DELETE
            FROM wishlist
            WHERE wish_id = ${id};
        `)
        .then(dbRes => res.sendStatus(200))
        .catch(err => console.log(err))
    },

    addPokemon: (req, res) => {
        const { name, pokedex, nickname, type1, type2, gender, isShiny, forTrade } = req.body
        let id = req.params.id

        sequelize.query(`
            INSERT INTO pokemon (pokedex_num, poke_name, trainer_id, nickname, type1, type2, gender, is_shiny, for_trade)
            VALUES (${pokedex}, '${name}', ${id}, ${nickname ? `'${nickname}'` : null}, '${type1}', ${type2 ? `'${type2}'` : null}, ${!gender || gender === 'Genderless' ? null : `'${gender}'`}, ${isShiny}, ${forTrade});
        `)
        .then(dbRes => res.sendStatus(200))
        .catch(err => console.log(err))
    },

    addWish: (req, res) => {
        const { pokedex, name, type1, type2, gender, isShiny} = req.body
    
        let id = req.params.id

        sequelize.query(`
            INSERT INTO wishlist (pokedex_num, wish_name, user_id, type1, type2, gender, is_shiny)
            VALUES (${pokedex}, '${name}', ${id}, '${type1}', ${type2 ? `'${type2}'` : null}, ${!gender || gender === 'Any' ? null : `'${gender}'`}, ${isShiny});
        `)
        .then(dbRes => res.sendStatus(200))
        .catch(err => console.log(err))
    }
}