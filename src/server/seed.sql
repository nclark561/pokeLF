CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR UNIQUE,
    password VARCHAR NOT NULL
);

CREATE TABLE pokemon (
    pokemon_id SERIAL PRIMARY KEY,
    pokedex_num INT NOT NULL,
    trainer_id INT NOT NULL REFERENCES users(id),
    nickname VARCHAR,
    type1 VARCHAR NOT NULL,
    type2 VARCHAR,
    gender VARCHAR,
    is_shiny BOOLEAN NOT NULL,
    for_trade BOOLEAN NOT NULL
);

INSERT INTO users (username, password)
VALUES ('pig', 'password'),
('noah', 'password2');

INSERT INTO pokemon (pokedex_num, trainer_id, nickname, type1, type2, gender, is_shiny, for_trade)
VALUES (392, 1, null, 'fire', 'fighting', 'male', FALSE, TRUE),
(491, 1, null, 'dark', null, null, TRUE, FALSE),
(216, 2, 'Ted', 'normal', null, 'female', TRUE, TRUE);