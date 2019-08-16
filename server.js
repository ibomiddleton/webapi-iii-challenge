const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const server = express();
const router = require('./posts/postRouter', './users/userRouter')
const bodyParser = express.json();

server.use(bodyParser);
server.use(helmet());
server.use(logger('dev'));
server.use(methodLogger);
server.use(validateUserId);
server.use(validateUser);
server.use(addName);

const errorHelper = (status, message, res) => {
  res.status(status).json({ error: message });
};


server.get('/', (req, res) => {
  const nameInsert = (req.name) ? ` ${req.name}` : '';

  res.send(`
    <h2>Middleton Hubs API</h2>
    <p>Welcome${nameInsert} to the Middleton Hubs API</p>
    `);
});

// CUSTOM MIDDLEWARE
function methodLogger(req, res, next) {
  console.log(`${req.method} Request`)
  next();
};

function addName(req, res, next) {
  req.name = 'Isaac';
  next();
};

function validateUserId(req, res, next) {
  
};

function validateUser(req, res, next) {
  const { name } = req.body;
  if (!name) {
    errorHelper(400, "missing user data", res);
    next();
  } else {
    next();
  }
};

// 

server.get('/api/users', (req, res) => {
  users
    .get()
    .then(foundUsers => {
      res.json(foundUsers);
    })
    .catch(err => {
      return errorHelper(500, 'Database boof', res);
    });
});

module.exports = server;