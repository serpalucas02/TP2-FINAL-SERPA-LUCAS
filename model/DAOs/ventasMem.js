class VentasMem {
    constructor() {
        this.ventas = [];
    }

    registrarVenta(venta) {
        this.ventas.push(venta);
        return venta;
    }
}

export default new VentasMem();
