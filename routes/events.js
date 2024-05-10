const {Router} = require('express');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validar-jwt');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');
const router = Router();


//Todas tienen que pasar por la validación del token
router.use(validarJWT)

//obtener evento
router.get('/', getEventos)

//crear Evento

router.post('/',[
    check('title','El titulo es obligatorio').not().isEmpty(),
    check('start','Fecha de inicio es obligatoria').custom(isDate),
    check('end','Fecha de finalización es obligatoria').custom(isDate),
    validarCampos
], crearEvento)

//Actualizar evento

router.put('/:id', actualizarEvento)

//Borrar evento

router.delete('/:id', eliminarEvento) 

module.exports =  router;