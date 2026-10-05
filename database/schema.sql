CREATE DATABASE IF NOT EXISTS loja_eletronicos;
USE loja_eletronicos;

CREATE TABLE IF NOT EXISTS produto (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  marca VARCHAR(50) NOT NULL,
  preco DECIMAL(10,2) NOT NULL
);

INSERT INTO produto (nome, marca, preco) VALUES
  ('Smartphone Galaxy S23', 'Samsung', 3999.90),
  ('Notebook Inspiron 15', 'Dell', 4599.00),
  ('Fone WH-1000XM5', 'Sony', 1899.00);
