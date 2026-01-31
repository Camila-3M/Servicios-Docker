const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Punto 1: Tabla de Productos (en memoria)
let productos = [
    { id: 1, nombre: "Laptop", precio: 800 },
    { id: 2, nombre: "Mouse", precio: 20 }
];

// BUSCAR (Punto 2)
app.get('/productos', (req, res) => res.json(productos));

// INSERTAR (Punto 2)
app.post('/productos', (req, res) => {
    const nuevo = { id: productos.length + 1, ...req.body };
    productos.push(nuevo);
    res.json({ message: "Producto insertado", producto: nuevo });
});

// MODIFICAR (Punto 2)
app.put('/productos/:id', (req, res) => {
    const { id } = req.params;
    const index = productos.findIndex(p => p.id == id);
    if (index !== -1) {
        productos[index] = { id: parseInt(id), ...req.body };
        return res.json({ message: "Producto modificado" });
    }
    res.status(404).json({ message: "No encontrado" });
});

// ELIMINAR (Punto 2)
app.delete('/productos/:id', (req, res) => {
    productos = productos.filter(p => p.id != req.params.id);
    res.json({ message: "Producto eliminado" });
});

app.listen(4000, () => console.log("Servicio CRUD en puerto 4000"));