CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR UNIQUE,
    password VARCHAR NOT NULL
);

CREATE TABLE pokemon (
    pokemon_id SERIAL PRIMARY KEY,
    pokedex_num INT NOT NULL,
    poke_name VARCHAR NOT NULL,
    trainer_id INT NOT NULL REFERENCES users(id),
    nickname VARCHAR,
    type1 VARCHAR NOT NULL,
    type2 VARCHAR,
    gender VARCHAR,
    is_shiny BOOLEAN NOT NULL,
    for_trade BOOLEAN NOT NULL
);

CREATE TABLE wishlist (
    wish_id SERIAL PRIMARY KEY,
    pokedex_num INT NOT NULL,
    wish_name VARCHAR NOT NULL,
    user_id INT NOT NULL REFERENCES users(id),
    type1 VARCHAR NOT NULL,
    type2 VARCHAR,
    gender VARCHAR,
    is_shiny BOOLEAN NOT NULL
);

INSERT INTO users (email, password)
VALUES ('noahwebdev@gmail.com', 'password'),
('legacygardening@gmail.com', 'password2');

INSERT INTO pokemon (pokedex_num, poke_name, trainer_id, nickname, type1, type2, gender, is_shiny, for_trade)
VALUES (392, 'infernape', 1, null, 'fire', 'fighting', 'male', FALSE, TRUE),
(491, 'darkrai', 1, null, 'dark', null, null, TRUE, FALSE),
(216, 'teddiursa', 2, 'Ted', 'normal', null, 'female', TRUE, TRUE);

INSERT INTO wishlist (pokedex_num, wish_name, user_id, type1, type2, gender, is_shiny)
VALUES (490, 'manaphy', 1, 'water', null, null, FALSE),
(560, 'scrafty', 1, 'dark', 'fighting', null, TRUE),
(670, 'floette', 2, 'fairy', null, 'female', TRUE);







DROP TABLE pokemon;

DROP TABLE wishlist;

DROP TABLE users;