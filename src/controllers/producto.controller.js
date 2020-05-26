
const productoController = {};

const Producto = require('../models/Producto');

productoController.findOne = async (req, res) => {
    const id =  req.param('id');
    const producto = await Producto.find({id: id});
    res.json({'data' : producto});
};

productoController.findAll = async (req, res) => {
    const email = req.param('email');
    const productos = await Producto.find({usuario: email});
    res.json({'data' : productos});
 };

productoController.newProduct = async (req, res) => {
    const { descripcion, precio, usuario} = req.body;
    const newProduct = new Producto({ descripcion, precio, usuario });
    await newProduct.save();7
    res.json({ 'data': newProduct });
};

module.exports = productoController;