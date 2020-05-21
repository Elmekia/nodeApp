const {Schema, model} = require('mongoose');

const ProductoSchema = new Schema({
    id: String,
    descripcion: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    } 
}, {
        timestamps: true
})

module.exports = model('Producto', ProductoSchema, 'productos');