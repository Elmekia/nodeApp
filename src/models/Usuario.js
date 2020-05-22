const { Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const UsuarioSchema = new Schema({
    nombre: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    perfil: { type: String, required: true},
}, {
    timestamps: true
});

UsuarioSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
}

UsuarioSchema.methods.matchPassword = async function (password){
    return await bcrypt.compare(password, this.password);
}

module.exports = model('Usuario', UsuarioSchema, 'usuarios');