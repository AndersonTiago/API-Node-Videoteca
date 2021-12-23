const express = require('express');
const routes = express.Router();

const VideoController = require("./controllers/VideoController");

// GET: buscar uma informação
// POST: Criar uma informação
// PUT: Editar uma informação por completo
// PATCH: Modificar apenas uma parte da informação
// DELETE: Deletar uma informação

routes.get("/videos", VideoController.index);
routes.post("/videos", VideoController.store);


module.exports = routes