import { Router } from "express";
import {createProdutos, getProdutos, deleteProdutos} from "../src/controllers/ProdutoController.js"
import {createCategorias, getCategorias, deleteCategorias} from "../src/controllers/CategoriaController.js"

const routes = Router()

routes.get('/produtos', getProdutos)
routes.post('/produtos', createProdutos)
routes.delete('/produtos:id', deleteProdutos)

routes.get('/categorias', getCategorias)
routes.post('/categorias', createCategorias)
routes.delete('/categorias:id', deleteCategorias)


export default routes