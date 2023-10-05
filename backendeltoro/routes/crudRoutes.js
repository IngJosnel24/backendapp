const express = require('express');
const router = express.Router();

module.exports = (db) => {
    // Ruta para leer registros de la tabla "producto"
    router.get('/productos', (req, res) => {
        const sql = 'SELECT * FROM producto';

        db.query(sql, (err, result) => {
            if (err) {
                console.error('Error al leer registros de producto:', err);
                res.status(500).json({ error: 'Error al leer registros de producto' });
            } else {
                res.status(200).json(result);
            }
        });
    });

    // Ruta para crear un nuevo registro en la tabla "producto"
    router.post('/productos', (req, res) => {
        const { nombre, precio_compra, precio_venta, descripcion, cantidad, Categoria } = req.body;

        if (!nombre || !precio_compra || !precio_venta || !descripcion || !cantidad || !Categoria) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        const sql = 'INSERT INTO producto (nombre, precio_compra, precio_venta, descripcion, cantidad, Categoria) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [nombre, precio_compra, precio_venta, descripcion, cantidad, Categoria];

        db.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error al insertar registro en producto:', err);
                res.status(500).json({ error: 'Error al insertar registro en producto' });
            } else {
                res.status(201).json({ message: 'Registro creado en producto con éxito' });
            }
        });
    });

    // Ruta para actualizar un registro existente en la tabla "producto" por ID
    router.put('/productos/:id', (req, res) => {
        const id = req.params.id;
        const { nombre, precio_compra, precio_venta, descripcion, cantidad, Categoria } = req.body;

        if (!nombre || !precio_compra || !precio_venta || !descripcion || !cantidad || !Categoria) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        const sql = 'UPDATE producto SET nombre = ?, precio_compra = ?, precio_venta = ?, descripcion = ?, cantidad = ?, Categoria = ? WHERE id_producto = ?';
        const values = [nombre, precio_compra, precio_venta, descripcion, cantidad, Categoria, id];

        db.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error al actualizar el registro en producto:', err);
                res.status(500).json({ error: 'Error al actualizar el registro en producto' });
            } else {
                res.status(200).json({ message: 'Registro en producto actualizado con éxito' });
            }
        });
    });

    // Ruta para eliminar un registro existente en la tabla "producto" por ID
    router.delete('/productos/:id', (req, res) => {
        const id = req.params.id;

        const sql = 'DELETE FROM producto WHERE id_producto = ?';

        db.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error al eliminar el registro en producto:', err);
                res.status(500).json({ error: 'Error al eliminar el registro en producto' });
            } else {
                res.status(200).json({ message: 'Registro en producto eliminado con éxito' });
            }
        });
    });
    // Rutas para la tabla "consumibles"
    router.get('/consumibles', (req, res) => {
        const sql = 'SELECT * FROM consumibles';

        db.query(sql, (err, result) => {
            if (err) {
                console.error('Error al leer registros de consumibles:', err);
                res.status(500).json({ error: 'Error al leer registros de consumibles' });
            } else {
                res.status(200).json(result);
            }
        });
    });

    router.post('/consumibles', (req, res) => {
        const { id_producto, fecha_vencimiento } = req.body;

        if (!id_producto || !fecha_vencimiento) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        const sql = 'INSERT INTO consumibles (id_producto, fecha_vencimiento) VALUES (?, ?)';
        const values = [id_producto, fecha_vencimiento];

        db.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error al insertar registro en consumibles:', err);
                res.status(500).json({ error: 'Error al insertar registro en consumibles' });
            } else {
                res.status(201).json({ message: 'Registro creado en consumibles con éxito' });
            }
        });
    });

    router.put('/consumibles/:id', (req, res) => {
        const id = req.params.id;
        const { id_producto, fecha_vencimiento } = req.body;

        if (!id_producto || !fecha_vencimiento) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        const sql = 'UPDATE consumibles SET id_producto = ?, fecha_vencimiento = ? WHERE id_Consumible = ?';
        const values = [id_producto, fecha_vencimiento, id];

        db.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error al actualizar el registro en consumibles:', err);
                res.status(500).json({ error: 'Error al actualizar el registro en consumibles' });
            } else {
                res.status(200).json({ message: 'Registro en consumibles actualizado con éxito' });
            }
        });
    });

    router.delete('/consumibles/:id', (req, res) => {
        const id = req.params.id;

        const sql = 'DELETE FROM consumibles WHERE id_Consumible = ?';

        db.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error al eliminar el registro en consumibles:', err);
                res.status(500).json({ error: 'Error al eliminar el registro en consumibles' });
            } else {
                res.status(200).json({ message: 'Registro en consumibles eliminado con éxito' });
            }
        });
    });


    // Rutas para la tabla "Videojuegos"
    router.get('/videojuegos', (req, res) => {
        const sql = 'SELECT * FROM Videojuegos';

        db.query(sql, (err, result) => {
            if (err) {
                console.error('Error al leer registros de Videojuegos:', err);
                res.status(500).json({ error: 'Error al leer registros de Videojuegos' });
            } else {
                res.status(200).json(result);
            }
        });
    });

    router.post('/videojuegos', (req, res) => {
        const { id_producto, plataforma } = req.body;

        if (!id_producto || !plataforma) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        const sql = 'INSERT INTO Videojuegos (id_producto, plataforma) VALUES (?, ?)';
        const values = [id_producto, plataforma];

        db.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error al insertar registro en Videojuegos:', err);
                res.status(500).json({ error: 'Error al insertar registro en Videojuegos' });
            } else {
                res.status(201).json({ message: 'Registro creado en Videojuegos con éxito' });
            }
        });
    });

    router.put('/videojuegos/:id', (req, res) => {
        const id = req.params.id;
        const { id_producto, plataforma } = req.body;

        if (!id_producto || !plataforma) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        const sql = 'UPDATE Videojuegos SET id_producto = ?, plataforma = ? WHERE id_videojuegos = ?';
        const values = [id_producto, plataforma, id];

        db.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error al actualizar el registro en Videojuegos:', err);
                res.status(500).json({ error: 'Error al actualizar el registro en Videojuegos' });
            } else {
                res.status(200).json({ message: 'Registro en Videojuegos actualizado con éxito' });
            }
        });
    });

    router.delete('/videojuegos/:id', (req, res) => {
        const id = req.params.id;

        const sql = 'DELETE FROM Videojuegos WHERE id_videojuegos = ?';

        db.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error al eliminar el registro en Videojuegos:', err);
                res.status(500).json({ error: 'Error al eliminar el registro en Videojuegos' });
            } else {
                res.status(200).json({ message: 'Registro en Videojuegos eliminado con éxito' });
            }
        });
    });


    // Ruta para leer registros de la tabla "Electronicos"
    router.get('/electronicos', (req, res) => {
        const sql = 'SELECT * FROM Electronicos';

        db.query(sql, (err, result) => {
            if (err) {
                console.error('Error al leer registros de Electronicos:', err);
                res.status(500).json({ error: 'Error al leer registros de Electronicos' });
            } else {
                res.status(200).json(result);
            }
        });
    });

    // Ruta para crear un nuevo registro en la tabla "Electronicos"
    router.post('/electronicos', (req, res) => {
        const { id_producto, marca } = req.body;

        if (!id_producto || !marca) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        const sql = 'INSERT INTO Electronicos (id_producto, marca) VALUES (?, ?)';
        const values = [id_producto, marca];

        db.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error al insertar registro en Electronicos:', err);
                res.status(500).json({ error: 'Error al insertar registro en Electronicos' });
            } else {
                res.status(201).json({ message: 'Registro creado en Electronicos con éxito' });
            }
        });
    });

    // Ruta para actualizar un registro existente en la tabla "Electronicos" por ID
    router.put('/electronicos/:id', (req, res) => {
        const id = req.params.id;
        const { id_producto, marca } = req.body;

        if (!id_producto || !marca) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        const sql = 'UPDATE Electronicos SET id_producto = ?, marca = ? WHERE id_electronicos = ?';
        const values = [id_producto, marca, id];

        db.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error al actualizar el registro en Electronicos:', err);
                res.status(500).json({ error: 'Error al actualizar el registro en Electronicos' });
            } else {
                res.status(200).json({ message: 'Registro en Electronicos actualizado con éxito' });
            }
        });
    });

    // Ruta para eliminar un registro existente en la tabla "Electronicos" por ID
    router.delete('/electronicos/:id', (req, res) => {
        const id = req.params.id;

        const sql = 'DELETE FROM Electronicos WHERE id_electronicos = ?';

        db.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error al eliminar el registro en Electronicos:', err);
                res.status(500).json({ error: 'Error al eliminar el registro en Electronicos' });
            } else {
                res.status(200).json({ message: 'Registro en Electronicos eliminado con éxito' });
            }
        });
    });

    return router;
};
