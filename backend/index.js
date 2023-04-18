const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const port = process.env.PORT || 8000;
app.use(express.json())
app.use(cors({ origin: ['http://localhost:3000', 'https://airbnb-clone-61212.web.app']}));
const {
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
    DB_PORT,
    DATABASE_URL
  } = require('./database/config')

//crear conexion a la base de datos
const db = mysql.createConnection({
    "host": DB_HOST,
    "database": DB_NAME,
    "password": DB_PASSWORD,
    "user": DB_USER,
    "port": DB_PORT,
});
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
})

//configurar el servidor
app.get('/', (req, res) => {
    db.query('SELECT * FROM propertyes', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
            res.send(err);
        }
    });
});
app.post('/', (req, res) => {
    const {Location, Price, img, dist} = req.body;
    db.query('INSERT INTO propertyes SET?', {
        Location,
        Price,
        img,
        dist
    }, (err, result)=>{
        if(err) throw err, res.send("err");

        else
           res.send("ok create")
    })
});

app.delete('/:id', (req, res) => {
    const {id} = req.params;
    db.query('DELETE FROM propertyes WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.send('Deleted...');
        } else {
            console.log(err);
            res.send("err");
        }
    });
});

app.put('/:id', (req, res) => {
    const {id} = req.params;
    const {Location, Price, img, dist} = req.body;
    db.query('UPDATE propertyes SET? WHERE id = ?', [{Location, Price, img, dist}, id], (err, rows, fields) => {
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
