class JuegosMem {
    constructor() {
        this.juegos = [];
        this.nextId = 1;
    }

    agregarJuego(juego) {
        juego.id = this.nextId++;
        juego.unidadesVendidas = 0;
        this.juegos.push(juego);
        return juego;
    }

    obtenerJuegos() {
        return this.juegos;
    }

    buscarJuego(id) {
        return this.juegos.find(j => j.id === id);
    }
}

export default new JuegosMem();
