const express = require("express");
const userRouter = express.Router();
const {getAllUsuarios, addUsuario, getUsuarioID, putUsuarioID, deleteUsuarioID }=require("../controllers/Usuario");

userRouter
    .route("/")
    .get(getAllUsuarios)
    .post(addUsuario);

userRouter
    .route("/:id")
    .get(getUsuarioID)
    .put(putUsuarioID)
    .delete(deleteUsuarioID);

module.exports = userRouter;
