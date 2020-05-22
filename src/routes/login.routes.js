const { Router } = require('express')
const router = Router();

const { singin, singup, logout } = require('../controllers/login.controller')

router.post('/singin', singin);

router.post('/singup', singup);

router.get('/logout', logout);

module.exports= router;