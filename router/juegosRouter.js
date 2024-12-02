import express from 'express';
import JuegosControlador from '../controlador/juegosControlador.js';

const router = express.Router();
const controlador = new JuegosControlador();

class JuegosRouter {
    start() {
        router.post('/registrar', controlador.registrarJuego);
        router.get('/inventario', controlador.listarJuegos);
        return router;
    }
}

export default JuegosRouter;
