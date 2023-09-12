import mongoose from "mongoose";

const categoriaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model('Categoria', categoriaSchema);
