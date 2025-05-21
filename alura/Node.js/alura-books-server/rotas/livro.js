const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("Ola mundo!");
});

module.exports = router