//AQUI TEREMOS OS METODOS QUE SERÃO AS NOSSAS REQUISIÇÕES

class HomeController {
    index(req, res) {
        res.json({
            tudoCert: true,
        });
    }
}

export default new HomeController();
