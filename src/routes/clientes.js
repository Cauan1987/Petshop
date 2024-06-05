// Rotas para tabela "clientes"
import express from "express";
import connect from "../../config/bancodedados.js";

const rotaClientes = express.Router();

rotaClientes.get("/", (req, res) => {
  const mysql = "SELECT * FROM clientes";
  connect.query(mysql, (erro, resultado) => {
    if (erro) {
      console.error("Erro ao executar a consulta");
      res.status(500).send("Erro ao buscar dados no banco de dados");
    } else {
      res.status(200).json(resultado); // Envia os resultados de volta como resposta
    }
  });
});

rotaClientes.post("/", (req, res) => {
  const novoCliente = req.body;
  const mysql = "INSERT INTO clientes SET ?";
  connect.query(mysql, novoCliente, (erro, resultado) => {
    if (erro) {
      console.error("Erro ao executar a consulta");
      res.status(500).send("Erro ao buscar dados no banco de dados");
    } else {
      res.status(200).json(resultado);
    }
  });
});

rotaClientes.delete("/:id", (req, res) => {
  const idCliente = req.params.id;
  const mysql = "DELETE FROM clientes WHERE id = ?";
  connect.query(mysql, idCliente, (erro, resultado) => {
    if (erro) {
      console.error("Erro ao executar a consulta");
      res.status(500).send("Erro ao inserir dados no banco de dados");
    } else {
      res.status(200).json(resultado);
    }
  });
});

rotaClientes.put("/:id", (req, res) => {
  const idCliente = req.params.id;
  const novoCliente = req.body;
  const mysql = "UPDATE clientes SET ? WHERE id = ?";
  connect.query(mysql, [novoCliente, idCliente], (erro, resultado) => {
    if (erro) {
      console.error("Erro ao executar a consulta");
      res.status(500).send("Erro ao inserir dados no banco de dados");
    } else {
      res.status(200).json(resultado);
    }
  });
});

export default rotaClientes;
