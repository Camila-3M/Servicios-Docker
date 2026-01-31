const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors'); // Importamos CORS

const app = express();
app.use(express.json());
app.use(cors()); // Permitimos que el cliente web se conecte

const PORT = 5000;
const SECRET = "secreto_2026";

// Usuario para que el docente haga la prueba
const ADMIN_USER = { username: "docente", password: "password123" };

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    if (username === ADMIN_USER.username && password === ADMIN_USER.password) {
        // Generamos el token que se usará para Insertar/Modificar/Eliminar
        const token = jwt.sign({ user: username }, SECRET, { expiresIn: '1h' });
        return res.json({ success: true, token });
    }
    
    res.status(401).json({ success: false, message: "Credenciales inválidas" });
});

app.listen(PORT, () => console.log(`Servicio de Auth corriendo en puerto ${PORT}`));