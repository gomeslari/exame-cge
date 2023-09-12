import Categoria from "../models/categoria.js";


async function getCategorias(req, res){
    const categorias = await Categoria.find();
    return res.status(200).json(categorias)
}

async function createCategorias(req, res){
    const categoria = req.body
    const novocategoria = new Categoria({
        "nome": categoria.nome,
        "descricao": categoria.descricao
    })
    try {
        const categoriaSalva = await novocategoria.save();
        return res.status(201).json(categoriaSalva)
      } catch (err) {
        return res.status(500).json(err)
      }

}

async function putCategorias(req, res) {
    const id = req.params.id;
    const categoriaAtualizada = req.body;

    try {
        const categoria = await Categoria.findByIdAndUpdate(id, categoriaAtualizada, { new: true });

        if (!categoria) {
            return res.status(404).json({ error: "Categoria não encontrada." });
        }

        return res.status(200).json(categoria);
    } catch (err) {
        return res.status(500).json(err);
    }
}

async function deleteCategorias(req, res){
    const id = req.params.id
    await categoria.findByIdAndDelete({_id: id})
    return res.status(200).json({res: "Categoria deletada!"})
}

export {createCategorias, getCategorias, putCategorias,deleteCategorias}