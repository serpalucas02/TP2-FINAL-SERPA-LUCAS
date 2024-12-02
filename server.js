import express from 'express';
import JuegosRouter from './router/juegosRouter.js';
import VentasRouter from './router/ventasRouter.js';
import config from './config.js';

const app = express();
app.use(express.json());
app.use(express.static('public'));

const juegosRouter = new JuegosRouter();
const ventasRouter = new VentasRouter();

app.use('/juegos', juegosRouter.start());
app.use('/ventas', ventasRouter.start());

app.listen(config.PORT, () => console.log(`Servidor express escuchando en http://localhost:${config.PORT}`));
