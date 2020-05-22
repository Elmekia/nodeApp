const loginController= {};

const Usuario = require('../models/Usuario');

loginController.singup = async (req, res) => {
    const errors = [];
    const { nombre, email, password, confirmPassword, perfil } = req.body;
    
    if(!password || password.length == 0)
        errors.push({text: 'Debe ingresar una contraseña'});

    if (password != confirmPassword)
        errors.push({text: 'Contraseñas no coinciden'});
    
    if(!perfil || perfil.length == 0)
        errors.push({text: 'Debe ingresar un perfil'});

    if(errors.length > 0)
        res.json(errors);
    else {
        const emailUser = await Usuario.findOne({email:email});
        if (emailUser)
            errors.push({text: 'Email registrado por otro usuario'});
        else {
            newUser = new Usuario({nombre, email, password, perfil});
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            res.json(newUser);
        }
    
    if(errors.length > 0)
        res.json(errors);
    }

    res.json();

};

loginController.singin = (req, res) => {
    res.json({signin: "ok"});
};

loginController.logout = (req, res) => {
    res.json({logout: "ok"});
};

module.exports = loginController;

