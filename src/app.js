import express from "express";
import rotaClientes from "./routes/clientes.js";
import rotaServico from "./routes/servicos.js";
import rotaAnimais from "./routes/animais.js";
import rotaVeterinario from "./routes/veterinarios.js";

const app = express();

app.use(express.json());

app.use("/animais", rotaAnimais),
app.use("/servicos", rotaServico),
app.use("/clientes", rotaClientes),
app.use("/veterinarios", rotaVeterinario);

export default app;
