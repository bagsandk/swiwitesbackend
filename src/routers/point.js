const { ClaimPoint, CheckVorcherPoint } = require("../controllers/point");
const router = require("express").Router();

router.post("/claim_point", ClaimPoint);
router.get("/check_claim/:exp/:code/:jumlah", CheckVorcherPoint);

module.exports = router;
