const express = require('express');
const router = express.Router();

// Ruta para obtener la lista de clientes
router.get('/', (req, res) => {
    res.send('Lista de clientes');
});

module.exports = router;
