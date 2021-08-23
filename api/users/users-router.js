const router = require("express").Router();
const Users = require("./users-model")


router.get("/api/users", async (req, res) => {
  res.json(await getAllUsers());
});

router.post("/api/users", async (req, res) => {
  res.status(201).json(await insertUser(req.body));
});


module.exports = router;