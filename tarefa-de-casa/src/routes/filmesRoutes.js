const controller = require('../controller/filmesController')

const express = require('express')

const router = express.Router()

router.get("/lista", controller.getAllFilmes)
router.get("/filme/:id", controller.getFavorite)
router.get("/listar/diretor", controller.getDiretor)
router.post("/adicionar", controller.adicionarFilme)

module.exports = router