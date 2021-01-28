const bodyParser = require('body-parser');
const mysql = require ('mysql');
const express = require ('express');
var app = express();


app.use(bodyParser.json());

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user:'root',
    password: '',
    database: 'moviecity',
    port: 3307,
});




mysqlConnection.connect((err)=>{
    if(!err)
    console.log('DB connection succeded');
    else
    console.log('DB connection failed \n Error:' + JSON.stringify(err, undefined,2));
});

app.listen(9977,()=> console.log('Express server is runnig at port no : 9977'));

app.get('/employees',(req,res) =>{
    mysqlConnection.query('SELECT * FROM users', (err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
});

app.get('/employees/:email', (req, res) => {
    mysqlConnection.query('SELECT * FROM users WHERE email = ?', [req.params.email], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});


const btncreate = document.getElementById("btncreate");
const btnread = document.getElementById("btnread");
const btnupdate = document.getElementById("btnupdate");
const btndelete = document.getElementById("btndelete");

btncreate.onclick=(evente)=>{
    
}