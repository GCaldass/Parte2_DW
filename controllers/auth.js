const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require ('bcryptjs');
const express = require('express');
const app = express();
const alert =express('alert');
const router = express.Router();
const swal= require ('sweetalert');
const db = mysql.createConnection({
    host: "localhost",
    user:'root',
    password: '',
    database: 'moviecity',
    port: 3307,
  });

exports.login= async (req,res)=>{
  /*  try{
        const{ register_email,register_password} = req.body;
        //console.log(results);
        if(!register_email || !register_password){
            return  res.status(400).render('index.html',{
                message:'Please provide an email and password'
            })
        }
        db.query('SELECT * FROM users WHRE email=?',[register_email], async(error,results)=>{
            if(!results || !( await bcrypt.compare(register_password, results[0].register_password)) ){
                res.status(401).render('login',{
                    message:'Email or Password is incorrect'
                })
            } else{
               const cookieOptions = {
                   expires: newDate(
                       Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                   ),
                   httpOnly: true
               }
               res.cookie('jwt', token, cookieOptions);
               res.status(200).redirect('/');
               
            }
        })

    }catch(error){
        console.log(error);
    }*/

    var admin = [
        {"login": "admin", "senha": "admin"}
      ]
    
    var senha = document.getElementsByName('login_password')[0].value;
    for (let u in admin) {
        var us = admin[u];
        if (us.login === usuario && us.senha === senha) {
            window.location = "adminis.html";
            return true;
        }
    }
    alert("Dados incorretos, tente novamente.");
    return false;
}
exports.login=(req,res)=>{
    try {
        const{ login_email, login_password}= req.body;
        if(!login_email || !login_password){
            res.status(200).send({
                message: "Insira um email ou uma passowrd válidos!",
              });
        }
        db.query('SELECT * FROM users WHERE email= ?', [login_email], async(error,results) =>{
            console.log(results);
            if(!results|| !(await bcrypt.compare(login_password, results[0].login_password) )){
                res.status(202).send({
                    message: "Email or Password is incorret",
                  });
            }else{
                const id = results[0].id;
                const token = jwt.sign({id}, process.env.JWT_SECRET,{
                    expiresIn: process.env.JWT_EXPIRES_IN
                });

                console.log("The token is:" + token);

                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60
                    ),
                    httpOnly:true
                }
                res.cookie('jwt', token, cookieOptions);
                res.status(200).redirect('/');
            }
        })
    
    } catch (error) {
        console.log(error);
    }
}  


exports.register = (req,res) =>{
    console.log(req.body);

    const{id,register_username,register_fullname,register_email,register_password,register_cpassword} = req.body;

    db.query('SELECT email FROM users WHERE email = ?', [register_email],async (error,results)=>{
        if(error){
            console.log(error);
        }
       
        if(results.length > 0 ){
            res.status(200).send({
                message: "Email já está a ser usado!",
              });
                res.send("Email já está a ser usado");
        }else if(register_password!== register_cpassword){
            res.status(200).send({
                message: "PASSWORD NÃO ESTÃO IGUAIS !",
              });
            console.log("PASSWORDS DIFERENTES!");
        }

        const hashedPassword = await bcrypt.hash(req.body.register_password, 10)
        
        db.query('INSERT INTO users SET ?', {id: Date.now().toString(), username: register_username, fullname: register_fullname, email: register_email, password: hashedPassword},(error, results)=>{
            if(error) {
                console.log(error);
            } else  {
                res.status(200).send({
                    message: "Utilizador registado!",
                  });
                console.log("Utilizador criado na BD!");
           }
        })
    });
}


exports.registerUser = (req,res) =>{
    console.log(req.body);
    console.log('CHEGOU');

    const{id,username,fullname,email,password} = req.body;
    console.log(req.body);
    db.query('SELECT email FROM users WHERE email = ?', [email],async (error,results)=>{
        if(error){
            console.log(error);
        }
       
        if(results.length > 0 ){
            res.status(200).send({
                message: "Email já está a ser usado!",
              });
                res.send("Email já está a ser usado");
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        
        db.query('INSERT INTO users SET ?', {id: Date.now().toString(), username: username, fullname: fullname, email: email, password: hashedPassword},(error, results)=>{
            if(error) {
                console.log(error);
            } else  {
                console.log("Utilizador criado na BDAdmin!");
           }
        })
    });
}

