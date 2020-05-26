const { Router } = require("express")
const router = Router();

const { findOne, findAll,  newProduct } = require('../controllers/producto.controller');

router.get('/findOne/', findOne);

router.get('/findAll/', findAll);

router.post('/new/', newProduct);

module.exports = router;