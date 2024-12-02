

import JuegoMem from '../model/DAOs/juegosMem.js';
import { validarJuego } from './validaciones/validaciones.js';

class JuegosServicio {
    constructor() {
        this.model = JuegoMem;
    }

    registrarJuego(juego) {
        const validacion = validarJuego(juego);
        if (!validacion.result) {
            throw new Error(validacion.error);
        }
        return this.model.agregarJuego(juego);
    }

    listarJuegos() {
        return this.model.obtenerJuegos();
    }
}

export default JuegosServicio;
