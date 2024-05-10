const {Router} = require('express');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();


//Todas tienen que pasar por la validación del token
router.use(validarJWT)

//obtener evento
router.get('/', getEventos)

//crear Evento

router.post('/', crearEvento)

//Actualizar evento

router.put('/:id', actualizarEvento)

//Borrar evento

router.delete('/:id', eliminarEvento) 

module.exports =  router;