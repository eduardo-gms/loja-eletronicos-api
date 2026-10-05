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

module.exports = router;
