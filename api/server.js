const path = require("path");
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authRouter = require("./auth/auth-router");
const usersRouter = require("./users/users-router");
const itemsRouter = require("./items/items-router")

const server = express()

server.use(express.static(path.join(__dirname, "../client")));
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/items', itemsRouter);

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    custom: "Catch all fail",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server