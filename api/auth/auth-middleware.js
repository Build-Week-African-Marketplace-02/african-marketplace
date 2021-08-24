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


const passwordValidation = (req, res, next) => {
    const { password } = req.body
    const valid = Boolean(typeof password === "string")
    if(valid){
        next()
    }else {
        next({
            status: 422,
            message: "Please provide a password in alphanumeric form"
        })
    }
}

const usernameExists = async (req, res, next) => {
    try {
        const existing = await Users.findBy({ username: req.body.username }).first()
        if(existing){
            next({
              status: 422,
              message: "This username is taken please provide another",
            });
        } else {
            next();
        }
    } catch (err){
        next(err)
    }

}


module.exports = { usernameValidation, passwordValidation, usernameExists };