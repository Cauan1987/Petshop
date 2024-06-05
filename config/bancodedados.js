import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const connect = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

connect.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados");
    return;
  }
  console.log("Conexão bem-sucedida com o banco de dados ");
});

export default connect;
