const mongoose = require('mongoose');
const Esquema = mongoose.Schema;
const EsquemaAplicacion = new Esquema({
    nombreApp: String,
    resumen: String,
    categoria: String,
    desarrollador: String,
});

const Aplicacion = mongoose.model('Aplicacion', EsquemaAplicacion);
module.exports = Aplicacion;
