const { Schema, mdoel} = require('mongoose');
const bcrypt = require('bcryptjs');

const UsuarioSchema = new Schema({
    nombre: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
}, {
    timestamps: true
});

UsuarioSchema.methods.encryptsPassword = async password => {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
}

UsuarioSchema.methods.matchPassword = function (password){
    return bcrypt.compare(password, this.password);
}

module.exports = mdoel('usuario', UsuarioSchema);