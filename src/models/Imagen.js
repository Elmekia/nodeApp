const {Schema, model} = require('mongoose');

const ImageSchema = new Schema({
    imagen: { type: Buffer} /*,
    usuario:{
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    } 
}, {
        timestamps: true*/
})

module.exports = model('Imagen', ImageSchema, 'uploads');