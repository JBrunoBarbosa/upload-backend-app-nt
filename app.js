const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();

const USERS     = require('./routes/users');
const TAREFAS   = require('./routes/tarefas');
const MAQUINA   = require('./routes/maquina');
const OBJETOS   = require('./routes/objetos');
const COMPRAS   = require('./routes/compras');
const FOLHAS    = require('./routes/folhas');
const EVENTOS   = require('./routes/eventos');
const TV        = require('./routes/horariotv');
const SORTEIO   = require('./routes/sorteio');
const PONTO     = require('./routes/pontos');

app.use(cors());
app.use(express.json());

const uri = process.env.DB_URL;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongo database connection works!");
});

app.use('/users', USERS);
app.use('/tasks', TAREFAS);
app.use('/machine', MAQUINA);
app.use('/objects', OBJETOS);
app.use('/buys', COMPRAS);
app.use('/papers', FOLHAS);
app.use('/events', EVENTOS);
app.use('/tv', TV);
app.use('/sort', SORTEIO);
app.use('/points', PONTO);

app.listen(PORT, () => {
    console.log(`Server running at port:${PORT}`);
});

