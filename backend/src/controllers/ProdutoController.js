import Produto from "../models/produto.js";


async function getProdutos(req, res){
    console.log('passou por aqui')
    const produtos = await Produto.find();
    res.header("Access-Control-Allow-Origin", "*");
    return res.status(200).json(produtos)
}

async function createProdutos(req, res){
    const produto = req.body
    const novoproduto = new Produto({
        "nome": produto.nome,
        "descricao": produto.descricao,
        "preco": produto.preco,
        "categoriaId": produto.categoriaId
    })
    try {
        const produtoSalvo = await novoproduto.save();
        return res.status(201).json(produtoSalvo)
      } catch (err) {
        return res.status(500).json(err)
      }
}

async function putProdutos(req, res) {
    const id = req.params.id;
    const produtoAtualizado = req.body;

    try {
        const produto = await Produto.findByIdAndUpdate(id, produtoAtualizado, { new: true });

        if (!produto) {
            return res.status(404).json({ error: "Produto não encontrado." });
        }

        return res.status(200).json(produto);
    } catch (err) {
        return res.status(500).json(err);
    }
}

async function deleteProdutos(req, res){
    const id = req.params.id
    await produto.findByIdAndDelete({_id: id})
    return res.status(200).json({res: "Produto deletado!"})
}

export {createProdutos, getProdutos, putProdutos,deleteProdutos}