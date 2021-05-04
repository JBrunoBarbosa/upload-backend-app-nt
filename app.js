const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();

const USERS     = require('./routes/users');
const TAREFAS   = require('./routes/tasks');
const OBJETOS   = require('./routes/objetos');
const COMPRAS   = require('./routes/compras');
const FOLHAS    = require('./routes/folhas');
const SORTEIO   = require('./routes/sorteio');
const PONTO     = require('./routes/pontos');
const AUTH      = require('./routes/auth');
const CALENDAR  = require('./routes/calendar');

app.use(cors());
app.use(express.json());

const agg = [
    {
      '$sort': {
        'when': 1
      }
    }
];

const uri = process.env.DB_URL;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
    function(connectErr, client) {
        assert.equal(null, connectErr);
        const coll = client.db('').collection('');
        coll.aggregate(agg, (cmdErr, result) => {
          assert.equal(null, cmdErr);
        });
        client.close();
}); 

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongo database connection works!");
});

app.use('/users', USERS);
app.use('/objects', OBJETOS);
app.use('/buys', COMPRAS);
app.use('/papers', FOLHAS);
app.use('/sort', SORTEIO);
app.use('/points', PONTO);
app.use('/auth', AUTH);
app.use('/calendar', CALENDAR);
app.use('/tasks', TAREFAS)

app.listen(PORT, () => {
    console.log(`Server running at port:${PORT}`);
});

