// Rotas para tabela "veterinarios"
import express from "express";
import connect from "../../config/bancodedados.js";

const rotaVeterinario = express.Router();

rotaVeterinario.get("/", (req, res) => {
  const mysql = "SELECT * FROM veterinarios";
  connect.query(mysql, (erro, resultado) => {
    if (erro) {
      console.error("Erro ao executar a consulta");
      res.status(500).send("Erro ao buscar dados no banco de dados");
    } else {
      res.status(200).json(resultado); 
    }
  });
});

rotaVeterinario.post("/", (req, res) => {
  const novoVeterinario = req.body;
  const mysql = "INSERT INTO veterinarios SET ?";
  connect.query(mysql, novoVeterinario, (erro, resultado) => {
    if (erro) {
      console.error("Erro ao executar a consulta");
      res.status(500).send("Erro ao inserir dados no banco de dados");
    } else {
      res.status(200).json(resultado); 
    }
  });
});

rotaVeterinario.delete("/:id", (req, res) => {
  const idVeterinario = req.params.id;
  const mysql = "DELETE FROM veterinarios WHERE id = ?";
  connect.query(mysql, idVeterinario, (erro, resultado) => {
    if (erro) {
      console.error("Erro ao executar a consulta");
      res.status(500).send("Erro ao inserir dados no banco de dados");
    } else {
      res.status(200).json(resultado); 
    }
  });
});

rotaVeterinario.put("/:id", (req, res) => {
  const idVeterinario = req.params.id;
  const novoVeterinario = req.body;
  const mysql = "UPDATE veterinarios SET ? WHERE id = ?";
  connect.query(mysql, [novoVeterinario, idVeterinario], (erro, resultado) => {
    if (erro) {
      console.error("Erro ao executar a consulta");
      res.status(500).send("Erro ao inserir dados no banco de dados");
    } else {
      res.status(200).json(resultado); 
    }
  });
});

export default rotaVeterinario;
