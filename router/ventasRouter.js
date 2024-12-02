import express from 'express';
import VentasControlador from '../controlador/ventasControlador.js';

const router = express.Router();
const controlador = new VentasControlador();

class VentasRouter {
    start() {
        router.post('/registrar', controlador.registrarVenta);
        return router;
    }
}

export default VentasRouter;
