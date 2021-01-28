/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint devel: true, browser: true, white: true*/
/*global alert, confirm, console, prompt, i */

var usuarios = [
    {"login": "raquel", "senha": "bcf"}

];
var admin = [
    {"login": "admin", "senha": "admin"}
  ];

function Login() {
    "use strict";
    var usuario = document.getElementsByName('login_email')[0].value,
    senha = document.getElementsByName('login_password')[0].value;

    for (let u in usuarios) {
        var us = usuarios[u];
        if (us.login === usuario && us.senha === senha) {
            window.location = "utilizador.html";
            return true;
        }   
    }
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

var login = document.getElementById('login');
var lpassword = document.getElementById('lpassword');

login.addEventListener('focus',()=> {
    login.style.borderColor = "#4A5F6A";
});
login.addEventListener('blur',()=> {
    login.style.borderColor = "#ccc";
});

lpassword.addEventListener('focus',()=> {
    login.style.borderColor = "#4A5F6A";
});
lpassword.addEventListener('blur',()=> {
    login.style.borderColor = "#ccc";
});





/*
function LoginUser() {
user = document.getElementsByName('login_email')[0].value.toLowerCase(),
password = document.getElementsByName('login_password')[0].value;
const data ={user, password};
const options ={
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
};
fetch('/api',options);
}*/