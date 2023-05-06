//AQUI TEREMOS OS METODOS QUE SERÃO AS NOSSAS REQUISIÇÕES
import Times from '../models/times';
class HomeController {
    //exibindo a tabela times
    async index(req, res) {
        const times = await Times.findAll();
        res.json(times);
    }


    //encontra pelo id
    async getbyID(req, res) {
        const time = await Times.findByPk(req.params.id);
        return res.json(time);
    }
}

export default new HomeController();
