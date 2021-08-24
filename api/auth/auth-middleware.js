const Users = require("../users/users-model");

const usernameValidation = (req, res, next) => {
    const { username } = req.body
    if (!username) {
      res.json({
        status: 422,
        message: "Please enter a valid username",
      })
    } else if (username.length > 200) {
        res.json({
          status: 422,
          message: "Please provide a username shorter than 200 characters",
        });
    } else {
        next()
    }
}

module.exports = {usernameValidation}