import Top from '../models/top';
import Jg from '../models/jungler';
import Mid from '../models/mid';
import Adc from '../models/bot';
import Sup from '../models/sup';
import Games from '../models/games';

class PlayerController {
    //TODOS OS TOP LANER
    async toplaner(req, res) {
        try {
            const toplaners = await Top.findAll();
            res.status(200).json(toplaners);
        } catch (error) {
            res.status(500).json({ status: 'error', message: 'Internal server error' });
        }
    }

    //TOPLANER BY ID
    async toplanerByID(req, res) {
        try {
            const toplanerByID = await Top.findByPk(req.params.id);
            res.status(200).json(toplanerByID);
        } catch (error) {
            res.status(500).json({ status: 'error', message: 'Internal server  error' });
        }
    }

    //TODOS OS JUNGLER
    async jungler(req, res) {
        try {
            const junglers = await Jg.findAll();
            res.status(200).json(junglers);
        } catch (error) {
            res.status(500).json({ status: 'error', message: 'Internal server  error' });
        }
    }

    //JUNGLER BY ID
    async junglerByID(req, res) {
        try {
            const junglerByID = await Jg.findByPk(req.params.id);
            res.status(200).json(junglerByID);
        } catch (error) {
            res.status(500).json({ status: 'error', message: 'Internal server  error' });
        }

    }

    //TODOS OS MID LANER
    async midlaner(req, res) {
        try {
            const midlaners = await Mid.findAll();
            res.status(200).json(midlaners);
        } catch (error) {
            res.status(500).json({ status: 'error', message: 'Internal server  error' });
        }
    }

    //MIDLANER BY ID
    async midlanerByID(req, res) {
        try {
            const midlanerByID = await Mid.findByPk(req.params.id);
            res.status(200).json(midlanerByID);
        } catch (error) {
            res.status(500).json({ status: 'error', message: 'Internal server  error' });
        }
    }


    //TODOS OS ADC
    async adc(req, res) {
        try {
            const adcs = await Adc.findAll();
            res.status(200).json(adcs);
        } catch (error) {
            res.status(500).json({ status: 'error', message: 'Internal server  error' });
        }
    }


    //ADC BY ID
    async adcByID(req, res) {
        try {
            const adcByID = await Adc.findByPk(req.params.id);
            res.status(200).json(adcByID);
        } catch (error) {
            res.status(500).json({ status: 'error', message: 'Internal server  error' });
        }
    }


    //TODOS OS SUPORTE
    async suporte(req, res) {
        try {
            const suportes = await Sup.findAll();
            res.status(200).json(suportes);
        } catch (error) {
            res.status(500).json({ status: 'error', message: 'Internal server  error' });
        }
    }


    //SUPORTE BY ID
    async suporteByID(req, res) {
        try {
            const suporteByID = await Sup.findByPk(req.params.id);
            res.status(200).json(suporteByID);
        } catch (error) {
            res.status(500).json({ status: 'error', message: 'Internal server  error' });
        }
    }

    //PONTUACAO
    async pontuacao(req, res) {
        try {
            const pontucao = await Games.findAll();
            res.status(200).json(pontucao);
        } catch (error) {
            res.status(500).json({ status: 'error', message: 'Internal server error' });
        }
    }

    //PONTUACAO BY ID
    async pontucaoByID(req, res) {
        try {
            const pontuacaoByID = await Games.findByPk(req.params.id);
            res.status(200).json(pontuacaoByID);
        } catch (error) {
            res.status(500).json({ tatus: 'error', message: 'Internal server error' });
        }
    }
}

export default new PlayerController();
