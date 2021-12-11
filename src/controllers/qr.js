const { encryptedString } = require("../utils/cryptr");
const QRCode = require("qrcode");
const models = require("../models");
const Vp = models.VourcerPoint;
module.exports.QrCodeMenu = (req, res, next) => {
  QRCode.toDataURL(
    "http://192.168.43.153:3000/foodmenu/food",
    function (err, base64) {
      res.json({ qr: base64 });
    }
  );
};
module.exports.QrClaimPoint = async (req, res, next) => {
  const dataPoint = await Vp.findByPk(1);
  if (dataPoint) {
    const data = {
      exp: encryptedString(dataPoint.vp_exp),
      pointId: encryptedString(dataPoint.id),
      pointAmount: encryptedString(dataPoint.vp_amount),
    };
    QRCode.toDataURL(
      `http://192.168.43.153:3000/claimpoint/${data.exp}/${data.pointId}/${data.pointAmount}`,
      function (err, base64) {
        res.json({ qr: base64 });
      }
    );
  } else {
    res.status(400);
  }
};
