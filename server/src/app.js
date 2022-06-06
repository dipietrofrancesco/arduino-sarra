const express = require("express");
const bodyParser = require("body-parser");

const db = require("./utils/db");
const routes = require("./routes/dati");

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use("/", routes);

db.sync().then(result => {
    console.log('Running...');
    const server = app.listen(process.env.PORT || 3000);
    const io = require('./socket').init(server);
    io.on('connection', socket => {
      console.log(socket.id);
    })
  }).catch(err => err => res.status(500).json(err));
  