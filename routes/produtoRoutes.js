const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET /produto
router.get('/', (req, res) => {
  db.query('SELECT id, nome, marca, preco FROM produto', (err, rows) => {
    if (err) return res.status(500).json({ erro: 'Erro ao listar produtos' });
    res.status(200).json(rows);
  });
});

// GET /produto/:id
router.get('/:id', (req, res) => {
  db.query('SELECT id, nome, marca, preco FROM produto WHERE id = ?', [req.params.id], (err, rows) => {
    if (err) return res.status(500).json({ erro: 'Erro ao buscar produto' });
    if (rows.length === 0) return res.status(404).json({ erro: 'Produto não encontrado' });
    res.status(200).json(rows[0]);
  });
});

// POST /produto
router.post('/', (req, res) => {
  const { nome, marca, preco } = req.body || {};
  if (!nome || !marca || preco === undefined) {
    return res.status(400).json({ erro: 'Campos nome, marca e preco são obrigatórios' });
  }
  db.query('INSERT INTO produto (nome, marca, preco) VALUES (?, ?, ?)', [nome, marca, preco], (err, result) => {
    if (err) return res.status(500).json({ erro: 'Erro ao cadastrar produto' });
    res.status(201).json({ id: result.insertId, nome, marca, preco });
  });
});

// PUT /produto/:id
router.put('/:id', (req, res) => {
  const { nome, marca, preco } = req.body || {};
  if (!nome || !marca || preco === undefined) {
    return res.status(400).json({ erro: 'Campos nome, marca e preco são obrigatórios' });
  }
  db.query('UPDATE produto SET nome = ?, marca = ?, preco = ? WHERE id = ?', [nome, marca, preco, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ erro: 'Erro ao atualizar produto' });
    if (result.affectedRows === 0) return res.status(404).json({ erro: 'Produto não encontrado' });
    res.status(200).json({ id: Number(req.params.id), nome, marca, preco });
  });
});

// DELETE /produto/:id
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM produto WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ erro: 'Erro ao excluir produto' });
    if (result.affectedRows === 0) return res.status(404).json({ erro: 'Produto não encontrado' });
    res.status(200).json({ mensagem: 'Produto excluído com sucesso' });
  });
});

module.exports = router;
