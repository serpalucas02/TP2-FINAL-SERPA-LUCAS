import JuegosServicio from '../servicio/juegosServicio.js';

class JuegosControlador {
    constructor() {
        this.service = new JuegosServicio();
    }

    registrarJuego = (req, res) => {
        try {
            const juego = this.service.registrarJuego(req.body);
            res.status(201).json(juego);
        } catch (error) {
            res.status(400).json({ errorMsg: error.message });
        }
    };

    listarJuegos = (req, res) => {
        const juegos = this.service.listarJuegos();
        res.status(200).json(juegos);
    };
}

export default JuegosControlador;
