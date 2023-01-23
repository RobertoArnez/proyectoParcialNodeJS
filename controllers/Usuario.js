const Usuario = require ("../models/Usuario");

const getAllUsuarios = async (req, res) => {
    const usuarios = await Usuario.find();
    res.status(200).json   ({
        status: "ok",
        data: usuarios,
    });
}

const addUsuario = async (req, res) => {
    let newUsuario = new Usuario();
    newUsuario.login = req.body.login;
    newUsuario.password = req.body.password;
    newUsuario.firstName = req.body.firstName;
    newUsuario.lastName = req.body.lastName;
    newUsuario = await newUsuario.save();
    res.status(200).json   ({
        status: "ok",
        dataInserted: newUsuario,
    });
}

const getUsuarioID = async (req, res) => {
    const UsuarioID = await Usuario.findById(req.params.id);
    res.status(200).json({
        status: "ok",
        action: "GET A  Usuarios",
        ID: UsuarioID,
    });
}

const putUsuarioID = (req, res) => {
    res.status(200).json({
        status: "ok",
        action: "MODIFY A  Usuarios",
        ID: req.params.id
    });
}

const deleteUsuarioID = async (req, res) => {
    
    let deleteID = await Usuario.deleteOne(req.params.id);
    // deleteID = await Usuario.find();
    res.status(200).json({
        status: "ok",
        action: "DELETE A  Usuarios",
        ID: deleteID
    });
}

module.exports = {
    getAllUsuarios,
    addUsuario,
    getUsuarioID,
    putUsuarioID,
    deleteUsuarioID,
}
