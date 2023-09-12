import { Router } from "express";
import {createProdutos, getProdutos, putProdutos,deleteProdutos} from "../src/controllers/ProdutoController.js"
import {createCategorias, getCategorias, deleteCategorias, putCategorias} from "../src/controllers/CategoriaController.js"

const routes = Router()

routes.get('/produtos', getProdutos)
routes.post('/produtos', createProdutos)
routes.put('/produtos', putProdutos)
routes.delete('/produtos:id', deleteProdutos)


routes.get('/categorias', getCategorias)
routes.post('/categorias', createCategorias)
routes.put('/categorias', putCategorias)
routes.delete('/categorias:id', deleteCategorias)


export default routes