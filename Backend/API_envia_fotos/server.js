const express = require('express');
const multer = require('multer');
const connection = require('./database');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('imagem'), (req, res) => {
    const imagem = req.file;

    // Realize as operações necessárias com a imagem, como salvá-la no banco de dados

    res.send('Imagem enviada com sucesso!');
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});