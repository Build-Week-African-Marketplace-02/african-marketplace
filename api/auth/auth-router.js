const bcrypt = require("bcryptjs");

const router = require("express").Router();

// const tokenBuilder = require("./auth-token-builder");
const Users = require("../users/users-model");

router.post("/register", (req, res, next) => {
    const { username, password, owner } = req.body;
    const hash = bcrypt.hashSync(password, 8);
    Users.insert({ username, password: hash, owner })
      .then((newUser) => {
        res.status(201).json(newUser);
      })
      .catch(next);
  }
);

module.exports = router;