/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint devel: true, browser: true, white: true*/
/*global alert, confirm, console, prompt, i */

var usuarios = [
    {"login": "Laercio", "senha": "bcf"}

];
var admin = [
    {"login": "admin", "senha": "admin"}
  ];

function Login() {
    "use strict";
    var usuario = document.getElementsByName('email')[0].value.toLowerCase(),
    senha = document.getElementsByName('password')[0].value;
    console.log('oi1');
    for (let u in usuarios) {
        var us = usuarios[u];
        if (us.login === usuario && us.senha === senha) {
            document.location.href ="http://www.java2s.com";
            window.open("https://www.w3schools.com");
            alert("Dados corretos, tente novamente.");
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