const { Router } = require("express")
const router = Router();
const multer = require('multer');
const GridFsStorage = require("multer-gridfs-storage");
const { gfs,storage } = require('../database');
const Imagen = require('../models/Imagen');


//const { findOne, findAll,  newProduct } = require('../controllers/producto.controller');
const upload = multer({ storage });

router.post('/',upload.single('file'),async (req, res) => {
    const newImage = new Imagen({ imagen: req.file.buffer});
    await newImage.save();
    console.log(newImage);
    res.json({file: newImage.imagen});
} );

module.exports = router;