const router = require("express").Router();
const menu = require("../controllers/menu");

router.get("/", menu.findAll);
router.post("/", menu.create);

module.exports = router;
