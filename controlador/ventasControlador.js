import VentasServicio from '../servicio/ventasServicio.js';

class VentasControlador {
    constructor() {
        this.service = new VentasServicio();
    }

    registrarVenta = (req, res) => {
        try {
            const { idJuego, cantidadVendida } = req.body;
            const venta = this.service.registrarVenta(idJuego, cantidadVendida);
            res.status(201).json(venta);
        } catch (error) {
            res.status(400).json({ errorMsg: error.message });
        }
    };
}

export default VentasControlador;
