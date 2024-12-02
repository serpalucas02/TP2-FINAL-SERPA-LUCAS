
import JuegosMem from '../model/DAOs/juegosMem.js';
import VentasMem from '../model/DAOs/ventasMem.js';
import { validarVenta } from './validaciones/validaciones.js';

class VentasServicio {
    constructor() {
        this.modelVentas = VentasMem;
        this.modelJuegos = JuegosMem;
    }

    registrarVenta(idJuego, cantidadVendida) {
        const validacion = validarVenta({ idJuego, cantidadVendida });
        if (!validacion.result) {
            throw new Error(validacion.error);
        }

        const juego = this.modelJuegos.buscarJuego(idJuego);
        if (!juego || juego.cantidadStock < cantidadVendida) {
            throw new Error('Juego no encontrado o stock insuficiente');
        }

        juego.cantidadStock -= cantidadVendida;
        juego.unidadesVendidas += cantidadVendida;

        const venta = { idJuego, cantidadVendida };
        return this.modelVentas.registrarVenta(venta);
    }
}

export default VentasServicio;
