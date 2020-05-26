const {Schema, model} = require('mongoose');

const ProductoSchema = new Schema({
    descripcion: {
        type: String,
        required: true,
    },
    usuario:{
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

ProductoSchema.methods.getId = async function (){
    return this.id;
}

module.exports = model('Producto', ProductoSchema, 'productos');