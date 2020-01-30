const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://rbsilva:DB4ever@cursojs01-tcfpz.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(connectionString, { useNewUrlParser: true,  useUnifiedTopology: true})
    .then(() => console.log('Agora que a conexão ocorreu'));
const routes = require('./routes');
const path = require('path');
const { middlewareGlobal, outroMiddleware} = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true}));

app.use(express.static(path.resolve(__dirname,'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(middlewareGlobal);
app.use(outroMiddleware);
app.use(routes);

app.listen(3001, () => {
    console.log('Acessar http://localhost:3001');
    console.log('Servidor executando na porta 3001');
});