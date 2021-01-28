const express = require('express');
const cookieParser = require('cookie-parser');
const { body, validationResult } = require('express-validator');
const bodyParser = require('body-parser');
const app = express();

// DEFINIR O MIDDLEWARE
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//app.use(expressValidator()); 
                        

app.get('/', (req, res) => {

    let cookieVal = req.cookies.user;
    let conteudo;

    app.use(express.json());
    app.post('/user', (req, res) => {
      User.create({
        username: req.body.username,
        password: req.body.password,
      }).then(user => res.json(user));
    });


app.post(
  '/user',
  // username must be an email
  body('register_email').isEmail(),
  // password must be at least 5 chars long
  body('register_password').isLength({ min: 5 }),
  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
      email: req.body.register_email,
      password: req.body.register_password,
    }).then(user => res.json(user));
  },
);



    if (cookieVal) {
        conteudo = `O cookie existe no cliente com o valor ${cookieVal} 
                   <br><a href="/apagar-cookie">Apagar o Cookie</a>`;
    } else {
        conteudo = `O cookie não está no cliente!<br>
        <a href="/criar-cookie">Criar o Cookie</a><br>
        <a href="/apagar-cookie">Apagar o Cookie</a><br>`;
    }

    res.send(conteudo);
});

// CRIAR COOKIE
app.get('/criar-cookie', (req, res) => {
    res.cookie('user', 'MovieCity', {
        maxAge: 1000 * 60, // 1 min
        httpOnly: true // http somente, evita acesso ao cookie pelo JavaScript
    });
    // REDIRECT PARA HOME
    res.redirect('/');
});

// APAGAR COOKIE
app.get('/apagar-cookie', (req, res) => {
    //A APAGAR COOKIE username 
    res.clearCookie('user');
    // REDIRECT PARA HOME
    res.redirect('/');

});

app.listen(3000, () => console.log('A ouvir na porta 3000'));