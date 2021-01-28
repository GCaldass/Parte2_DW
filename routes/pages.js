const { response } = require('express');
const express = require('express');
const router = express.Router();

router.get('/',(req,response)=>{
    response.render('index');
});

router.get('/register',(req,response)=>{
    response.render('index');
});

router.get('/login',(req,response)=>{
    response.render('index');
});

module.exports = router;