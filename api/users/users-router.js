const router = require("express").Router();
const Users = require("./users-model")


router.get("/", async (req, res) => {
  res.json(await Users.getAllUsers());
  // res.json("users get api")
});

router.post("/", async (req, res) => {
  res.status(201).json(await Users.insertUser(req.body));
});


module.exports = router;