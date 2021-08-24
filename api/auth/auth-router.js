const bcrypt = require("bcryptjs");

const router = require("express").Router();

const tokenBuilder = require("./auth-token-builder");
const Users = require("../users/users-model");
const {
  usernameValidation,
  passwordValidation,
  usernameExists,
} = require("./auth-middleware");


router.post("/register", usernameValidation, passwordValidation, usernameExists, (req, res, next) => {
    const { username, password } = req.body;
    const hash = bcrypt.hashSync(password, 8);
    Users.insertUser({ username, password: hash })
      .then(() => {
        res.status(201).json({
          newUser: username,
        });
      })
      .catch(next);
    }
  );

router.post("/login", (req, res, next) => {
  const { username, password } = req.body;
  Users.findBy({ username }) 
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = tokenBuilder(user);
        res.status(200).json({
          message: `Welcome back ${user.username}!`,
          token,
        });
      } else {
        next({ status: 401, message: "Invalid Credentials" });
      }
    })
    .catch(next);
});

module.exports = router;