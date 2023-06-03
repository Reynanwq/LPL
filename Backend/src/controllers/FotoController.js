import connection from '../config/database';

class FotoController {
    async fotos(req, res) {
        try {
            const sql = 'SELECT * FROM imagens';
            const [result] = await connection.query(sql);

            if (result.length === 0) {
                return res.status(404).json({ message: 'Nenhuma imagem encontrada' });
            }

            const imagens = result.map((row) => ({
                id: row.id,
                nome: row.nome,
                imagem: row.imagem,
            }));

            res.status(200).json(imagens);
        } catch (error) {
            console.error('Erro ao obter as imagens do banco de dados:', error);
            res.status(500).json({ message: 'Erro ao obter as imagens do banco de dados' });
        }
    }
}

export default new FotoController();
