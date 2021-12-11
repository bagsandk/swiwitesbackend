const router = require("express").Router();
const { QrCodeMenu, QrClaimPoint } = require("../controllers/qr");

router.get("/menu", QrCodeMenu);
router.get("/claim_point", QrClaimPoint);

module.exports = router;
