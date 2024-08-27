const express = require('express');
const router = express.Router();

// Ruta para obtener la lista de productos
router.get('/', (req, res) => {
    res.send('Lista de productos');
});

module.exports = router;
