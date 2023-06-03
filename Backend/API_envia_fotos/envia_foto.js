/*const fs = require('fs');
const connection = require('./database');

const nomeArquivo = './assets/AL/AL_logo.webp';

fs.readFile(nomeArquivo, (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    const nomeImagem = 'AL_logo.webp';
    const sql = 'INSERT INTO imagens (nome, imagem) VALUES (?, ?)';

    connection.query(sql, [nomeImagem, data], (error, results) => {
        if (error) {
            console.error('Erro ao inserir a imagem no banco de dados:', error);
            return;
        }

        console.log('Imagem inserida com sucesso!');
    });
});*/

const fs = require('fs');
const connection = require('./database');

const folderPath = './assets/weibo/Players'; // Pasta onde os arquivos estão localizados

fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error('Erro ao ler os arquivos:', err);
        return;
    }

    // Loop pelos arquivos encontrados na pasta
    files.forEach(file => {
        const filePath = `${folderPath}/${file}`;

        // Lê o conteúdo do arquivo
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.error(`Erro ao ler o arquivo ${file}:`, err);
                return;
            }

            const nomeImagem = file;
            const sql = 'INSERT INTO imagens (nome, imagem) VALUES (?, ?)';

            connection.query(sql, [nomeImagem, data], (error, results) => {
                if (error) {
                    console.error(`Erro ao inserir a imagem ${file} no banco de dados:`, error);
                    return;
                }

                console.log(`Imagem ${file} inserida com sucesso!`);
            });
        });
    });
});