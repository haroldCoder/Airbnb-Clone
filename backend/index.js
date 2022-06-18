const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const port = process.env.PORT || 8000;
app.use(express.json())
app.use(cors({ origin: ['http://localhost:3000', 'https://airbnb-clone-61212.web.app']}));

//crear conexion a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'koderx',
    password: '2364144',
    database: 'propertyes',
});
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
})

//configurar el servidor
app.get('/', (req, res) => {
    db.query('SELECT * FROM proper', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    });
});
app.post('/', (req, res) => {
    const {Location, Price, img, dist} = req.body;
    db.query('INSERT INTO proper SET?', {
        Location,
        Price,
        img,
        dist
    })
});

app.delete('/:id', (req, res) => {
    const {id} = req.params;
    db.query('DELETE FROM proper WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.send('Deleted...');
        } else {
            console.log(err);
        }
    });
});

app.put('/:id', (req, res) => {
    const {id} = req.params;
    const {Location, Price, img, dist} = req.body;
    db.query('UPDATE proper SET? WHERE id = ?', [{Location, Price, img, dist}, id], (err, rows, fields) => {
        if (!err) {
            res.send('Updated...');
        } else {
            console.log(err);
        }
    });
});

//configurar el servidor
app.listen(port, ()=>{
    console.log('Server is running on port: '+port);
});
