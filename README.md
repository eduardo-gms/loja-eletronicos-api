# Loja de Eletrônicos API

## Como rodar
1. Criar banco e tabelas no MySQL/MariaDB:
   ```bash
   mysql -u root -p < database/schema.sql
   ```
2. Instalar dependências:
   ```bash
   npm install
   ```
3. Executar o servidor:
   ```bash
   npm start
   ```

## Rotas

| Método | Rota         | Descrição                  | Corpo da Requisição (Exemplo) |
|--------|--------------|----------------------------|-------------------------------|
| GET    | /produto     | Lista todos os produtos    | -                             |
| GET    | /produto/:id | Busca produto pelo ID      | -                             |
| POST   | /produto     | Cria um novo produto       | `{"nome": "TV 50\"", "marca": "LG", "preco": 2500}` |
| PUT    | /produto/:id | Atualiza um produto por ID | `{"nome": "TV 50\"", "marca": "LG", "preco": 2300}` |
| DELETE | /produto/:id | Exclui um produto pelo ID  | -                             |
