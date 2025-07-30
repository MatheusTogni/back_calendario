import express from "express";
import cors from "cors";
import ministracoesRoute from "./routes/ministracoesRoute"

const app = express();

app.use(cors({
  origin: [
    "http://localhost:3001" 
  ],
}));
app.use(express.json());

const PORT = 3000

app.use("/ministracoes", ministracoesRoute);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});