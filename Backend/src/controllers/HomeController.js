//AQUI TEREMOS OS METODOS QUE SERÃO AS NOSSAS REQUISIÇÕES
import Times from '../models/times';
class HomeController {
    async index(req, res) {
        const times = await Times.findAll({
            attributes: ['teamName'],
        });
        res.json(times);
    }
}

export default new HomeController();
