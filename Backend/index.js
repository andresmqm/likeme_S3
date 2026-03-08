const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./dataBase/conexion');

app.use(cors());
app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});



app.get('/posts', async (req, res) => {

    try {
    const resu = await pool.query('SELECT * FROM posts');
    res.json(resu.rows);
} catch (error) {
    console.error('Error al obtener los posts:', error);
    res.status(500).json({ error: 'Error al obtener los posts' });
}
});



app.post('/posts', async (req, res) => {

    try {
    const {titulo, img, descripcion, likes} = req.body;
    console.log("Datos recibidos:", req.body);


    const values = [titulo, img, descripcion, likes];
    const resu = await pool.query('INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4)', values);
    res.json(resu.rows[0]);
} catch (error) {
    console.error('Error al crear el post:', error.message);
    res.status(500).json({ error: 'Error al crear el post' });
}
});


