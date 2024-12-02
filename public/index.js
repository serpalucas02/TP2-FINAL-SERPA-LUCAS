// Registrar un juego
document.getElementById('formJuego').addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const categoria = document.getElementById('categoria').value;
    const precio = document.getElementById('precio').value;
    const stock = document.getElementById('stock').value;

    const response = await fetch('/juegos/registrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, categoria, precio: parseFloat(precio), cantidadStock: parseInt(stock) })
    });

    const result = await response.json();
    if (response.ok) {
        alert('Juego registrado correctamente');
        cargarInventario();
    } else {
        alert(`Error: ${result.errorMsg}`);
    }

    e.target.reset();
});

// Registrar una venta
document.getElementById('formVenta').addEventListener('submit', async (e) => {
    e.preventDefault();

    const idJuego = document.getElementById('idJuego').value;
    const cantidadVendida = document.getElementById('cantidadVendida').value;

    const response = await fetch('/ventas/registrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idJuego: parseInt(idJuego), cantidadVendida: parseInt(cantidadVendida) })
    });

    const result = await response.json();
    if (response.ok) {
        alert('Venta registrada correctamente');
        cargarInventario();
    } else {
        alert(`Error: ${result.errorMsg}`);
    }

    e.target.reset();
});

// Cargar el inventario
async function cargarInventario() {
    const response = await fetch('/juegos/inventario');
    const juegos = await response.json();

    const tabla = document.getElementById('tablaInventario').querySelector('tbody');
    tabla.innerHTML = '';

    juegos.forEach(juego => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${juego.id}</td>
            <td>${juego.nombre}</td>
            <td>${juego.categoria}</td>
            <td>${juego.precio}</td>
            <td>${juego.cantidadStock}</td>
            <td>${juego.unidadesVendidas}</td>
        `;
        tabla.appendChild(fila);
    });
}

cargarInventario();
