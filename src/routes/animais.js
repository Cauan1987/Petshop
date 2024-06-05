// Rotas para tabela "animais"
import express from "express";
import connect from "../../config/bancodedados.js";

const rotaAnimais = express.Router();

rotaAnimais.get("/", (req, res) => {
  const mysql = "SELECT * FROM animais";
  connect.query(mysql, (erro, resultado) => {
    if (erro) {
      console.error("Erro ao executar a consulta");
      res.status(500).send("Erro ao buscar dados no banco de dados");
    } else {
      res.status(200).json(resultado); 
    }
  });
});

rotaAnimais.post("/", (req, res) => {
  const novoAnimal = req.body;
  const mysql = "INSERT INTO animais SET ?";
  connect.query(mysql, novoAnimal, (erro, resultado) => {
    if (erro) {
      console.error("Erro ao executar a consulta");
      res.status(500).send("Erro ao buscar dados no banco de dados");
    } else {
      res.status(200).json(resultado); 
    }
  });
});

rotaAnimais.delete("/:id", (req, res) => {
  const idAnimais = req.params.id;
  const mysql = "DELETE FROM animais WHERE id = ?";
  connect.query(mysql, idAnimais, (erro, resultado) => {
    if (erro) {
      console.error("Erro ao executar a consulta");
      res.status(500).send("Erro ao inserir dados no banco de dados");
    } else {
      res.status(200).json(resultado); 
    }
  });
});

rotaAnimais.put("/:id", (req, res) => {
  const idAnimais = req.params.id;
  const novoAnimal = req.body;
  const mysql = "UPDATE animais SET ? WHERE id = ?";
  connect.query(mysql, [novoAnimal, idAnimais], (erro, resultado) => {
    if (erro) {
      console.error("Erro ao executar a consulta");
      res.status(500).send("Erro ao inserir dados no banco de dados");
    } else {
      res.status(200).json(resultado); 
    }
  });
});

export default rotaAnimais;
