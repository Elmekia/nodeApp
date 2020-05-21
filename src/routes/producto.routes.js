const { Router } = require("express")
const router = Router();

const { getProducto, productoNuevo } = require('../controllers/producto.controller');

router.get('/producto/', getProducto);

router.post('/producto/', productoNuevo);

module.exports = router;