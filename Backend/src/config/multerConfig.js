import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
    //verifica se é PNG OU JPG
    fileFilter: (req, file, cb) => {
        if (file.mimetype != 'image/png' && file.mimetype != 'image/jpg') {
            return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPG'));
        }
        return cb(null, true);
    },
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, resolve(__dirname, '..', '..', 'uploads'));
        },
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
        }
    })
};
