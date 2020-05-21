
const productoController = {};

const Producto = require('../models/Producto');

productoController.getProducto = async (req, res) => {
   const productos = await Producto.find();
   res.json(productos);
};

var productos= [];

productoController.productoNuevo = async (req, res) => {
    const id = productos.length + 1;
    const { descripcion, precio} = req.body;
    const newProduct = new Producto({ id, descripcion, precio });
    await newProduct.save();
    console.log(newProduct);
    productos.push(newProduct);
    res.json(productos);
};

module.exports = productoController;