const express = require('express');
const routes = express.Router();

const VideoController = require("./controllers/VideoController");
const VideoMiddlewares = require('./middleware/VideoMiddlewares');

// GET: buscar uma informação
// POST: Criar uma informação
// PUT: Editar uma informação por completo
// PATCH: Modificar apenas uma parte da informação
// DELETE: Deletar uma informação

routes.get("/videos", VideoController.index);
routes.post("/videos", VideoController.store);

routes.put("/videos/:id", VideoMiddlewares.validateId, VideoController.update);
routes.delete("/videos/:id", VideoMiddlewares.validateId, VideoController.delete);
routes.patch("/videos/:id", VideoMiddlewares.validateId, VideoController.updateLike);
module.exports = routes