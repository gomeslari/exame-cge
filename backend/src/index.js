import express from "express";
import connectDatabase from "./database/db.js";
import routes from "./routes.js";
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'))
app.use(routes);

connectDatabase()
  .then(() => {
    app.listen(3000, () =>
      console.log("Servidor rodando e Banco de dados conectado"))
  })
  .catch(() => console.log("Deu ruim"))


