import Joi from 'joi';

export const validarJuego = (juego) => {
    const juegoSchema = Joi.object({
        nombre: Joi.string().required(),
        categoria: Joi.string().valid('estrategia', 'rol', 'cartas', 'familiar').required(),
        precio: Joi.number().positive().required(),
        cantidadStock: Joi.number().integer().min(0).required(),
    });

    const { error } = juegoSchema.validate(juego);
    if (error) {
        return { result: false, error: error.details[0].message };
    }

    return { result: true };
};

export const validarVenta = (venta) => {
    const ventaSchema = Joi.object({
        idJuego: Joi.number().integer().required(),
        cantidadVendida: Joi.number().integer().min(1).required(),
    });

    const { error } = ventaSchema.validate(venta);
    if (error) {
        return { result: false, error: error.details[0].message };
    }

    return { result: true };
};
