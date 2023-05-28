import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Foto from '../models/foto_times';

const upload = multer(multerConfig).single('foto');

class FotoController {
    store(req, res) {
        return upload(req, res, async(error) => {
            if (error) {
                return res.status(400).json({
                    errors: [error.code],
                });
            }

            try {
                const { originalname, filename } = req.file;
                const { times_id } = req.body;
                const foto = await Foto.create({ originalname, filename, times_id });

                return res.json(foto);
            } catch (e) {
                return res.status(400).json({
                    errors: ['Time não existe'],
                });
            }
        });
    }
}

export default new FotoController();
