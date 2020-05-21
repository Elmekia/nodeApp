const { Router } = require('express')
const router = Router();

const { defaultRoute } = require('../controllers/index.controller')

router.get('/', defaultRoute);

module.exports = router;