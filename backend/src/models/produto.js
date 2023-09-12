import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    categoriaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categoria',
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model('Produto', produtoSchema);

