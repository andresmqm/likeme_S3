CREATE DATABASE likeme;
USE likeme;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(25) NOT NULL,
    img VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    likes INT NOT NULL
); 