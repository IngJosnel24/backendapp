const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 5000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ONEYKER2105',
    database: 'eltoro'
});
db.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});

app.use(cors());

const crudRoutes = require('./routes/crudRoutes.js')(db); //Pasa la instancia de la base de datos a crudRoutes
app.use('/crud', crudRoutes);


// Iniciar el servidor 
app.listen(port, () => {
    console.log(`Servidor backend en funcionamiento en el puerto ${port}`);
});

