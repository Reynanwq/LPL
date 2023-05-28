import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Foto from '../models/foto_times';
import Times from '../models/times';

const upload = multer(multerConfig).single('UP');

class FotoController {
    async store(req, res) {
        try {
            const { originalname, filename } = req.file;
            const { times_id } = req.body;

            const time = await Times.findByPk(times_id);
            if (!time) {
                return res.status(400).json({
                    errors: ['Time não existe'],
                });
            }

            const foto = await Foto.create({ originalname, filename, times_id });

            return res.json(foto);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Ocorreu um erro ao criar a foto' });

        }
    }
}

export default new FotoController();

export { upload };
