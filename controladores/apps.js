const EsquemaPelicula = require('../modelos/Aplicaciones');
const Calificacion = require('../modelos/Calificacion');
const passport = require('passport')

module.exports.controller = (app) => {
    // Agregar una App nueva
    app.post('/aplicaciones', (req, res) => {
        const nuevaAplicacion = new EsquemaAplicacion({
            nombreApp: req.body.nombreApp,
            resumen: req.body.resumen,
            categoria: req.body.categoria,
            desarrollador: req.body.desarrollador,
            imagen: req.body.imagen,
        });

        nuevaAplicacion.save()
        .then((error, aplicacion) => {
            if (error) {
                console.log(error);
            }
            res.send(aplicacion);
        });
    });

    // Obtener todas las aplicaciones
    app.get('/aplicaciones', passport.authenticate('jwt', { session: false }), (req, res) => {
        EsquemaAplicacion.find({}, 'nombreApp resumen categoria desarrollador')
        .then((error, aplicacion) => {
            if (error) { 
                console.log(error);
                res.send(error);
            } else {
                res.send({aplicacion});
            }
        });
    });

    // Obtener una aplicacion
    app.get('/api/aplicaciones/:id', (req, res) => {
        EsquemaAplicacion.findById(req.params.id, 'nombreApp resumen categoria desarrollador')
        .then((error, aplicacion) => {
            if (error) {
                console.error(error);
            } else {
                res.send(aplicacion);
            }
        });
    })

    // Calififcar una aplicacion
    app.post('/aplicaciones/calif/:id', (req, res) => {
        const calificacion = new Rating({
            aplicacion_id: req.params.id,
            user_id: req.body.user_id,
            calif: req.body.calif,
        });

        calificacion.save(function (error, calif) {
            if (error) {
                console.log(error);
            }
            res.send({
                aplicacion_id: calificacion.aplicacion_id,
                user_id: calificacion.user_id,
                calif: calificacion.calif,
            });
        });
    });

    // Eliminar una aplicacion por su id
    app.delete('/aplicaciones/:id', (req, res) => {
        EsquemaAplicacion.deleteOne({_id: req.params.id})
        .then((error, aplicacion) => {
            if(error) {
                console.error(error);
                res.send(error);
            } else {
                res.end({estado: eliminado});
            }
        });
    });

    // Borrar todas las aplicaciones
    app.delete('/aplicaciones', (req, res) => {
        EsquemaAplicacion.deleteMany({})
        .then((error) => {
            if(error) {
                console.error(error);
                res.send(error);
            } else {
                res.end({estado: eliminado});
            }
        });
    });
};
