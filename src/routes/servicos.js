// Rotas para tabela "servicos"
import express from "express";
import connect from "../../config/bancodedados.js";

const rotaServico = express.Router();

rotaServico.get("/", (req, res) => {
  const mysql = "SELECT * FROM servicos";
  connect.query(mysql, (erro, resultado) => {
    if (erro) {
      console.error("Erro ao executar a consulta");
      res.status(500).send("Erro ao buscar dados no banco de dados");
    } else {
      res.status(200).json(resultado); 
    }
  });
});

rotaServico.post("/", (req, res) => {
  const novoServico = req.body;
  const mysql = "INSERT INTO servicos SET ?";
  connect.query(mysql, novoServico, (erro, resultado) => {
    if (erro) {
      console.error("Erro ao executar a consulta");
      res.status(500).send("Erro ao inserir dados no banco de dados");
    } else {
      res.status(200).json(resultado); 
    }
  });
});

rotaServico.delete("/:id", (req, res) => {
  const idServico = req.params.id;
  const mysql = "DELETE FROM servicos WHERE id = ?";
  connect.query(mysql, idServico, (erro, resultado) => {
    if (erro) {
      console.error("Erro ao executar a consulta");
      res.status(500).send("Erro ao inserir dados no banco de dados");
    } else {
      res.status(200).json(resultado); 
    }
  });
});

rotaServico.put("/:id", (req, res) => {
  const idServico = req.params.id;
  const novoServico = req.body;
  const mysql = "UPDATE servicos SET ? WHERE id = ?";
  connect.query(mysql, [novoServico, idServico], (erro, resultado) => {
    if (erro) {
      console.error("Erro ao executar a consulta");
      res.status(500).send("Erro ao inserir dados no banco de dados");
    } else {
      res.status(200).json(resultado); 
    }
  });
});

export default rotaServico;
