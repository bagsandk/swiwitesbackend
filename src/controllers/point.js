const { decryptedString } = require("../utils/cryptr");
const models = require("../models");
const Vp = models.VourcerPoint;
const PT = models.PointTransaction;
const UserPoint = models.UserPoint;

module.exports.CheckVorcherPoint = async (req, res, next) => {
  const jumlah = decryptedString(req.params.jumlah);
  const exp = decryptedString(req.params.exp);
  const code = decryptedString(req.params.code);
  if (code) {
    const checkvp = await Vp.findByPk(code);
    if (checkvp) {
      const checkPointT = await PT.findOne({
        where: {
          sourceId: code,
          sourceType: "VOURCHER_POINT",
          operationType: "ADD_POINT",
        },
      });
      if (!checkPointT) {
        if (checkvp.vp_exp > new Date()) {
          res.json({
            data: {
              exp,
              jumlah,
              code: req.params.code,
            },
            exp: false,
            claim: false,
            message: "Point",
          });
        } else {
          res.json({
            data: {
              exp,
              jumlah,
              code: req.params.code,
            },
            exp: true,
            claim: false,
            message: "Point EXP",
          });
        }
      } else {
        res.json({
          data: {
            exp,
            jumlah,
            code: req.params.code,
          },
          exp: false,
          claim: true,
          message: "Point Sudah di Claim",
        });
      }
    } else {
      res.json({
        data: null,
        message: "Point tidak ada",
      });
    }
  }
};

module.exports.ClaimPoint = async (req, res, next) => {
  const user = req.user;
  const id = decryptedString(req.body.id);
  if (id) {
    const checkvp = await Vp.findByPk(id);
    if (checkvp) {
      const checkPointT = await PT.findOne({
        where: {
          sourceId: id,
          sourceType: "VOURCHER_POINT",
          operationType: "ADD_POINT",
        },
      });
      if (!checkPointT) {
        const up = await UserPoint.findOne({
          where: {
            userId: user.id,
          },
        });
        try {
          PT.create({
            operationType: "ADD_POINT",
            sourceType: "VOURCHER_POINT",
            sourceId: id,
            targetType: "USER_POINT",
            targetId: up.id,
            amount: checkvp.vp_amount,
            point_balance: checkvp.vp_amount + up.amount,
          });
          UserPoint.update(
            { amount: checkvp.vp_amount + up.amount },
            { where: { userId: user.id } }
          );
          res.json({
            status: "success",
            massage: "Point berhasil ditambahkan",
          });
        } catch (e) {
          res.status(500);
        }
      } else {
        res.json({
          status: "failed",
          message: "Point sudah di claim",
        });
      }
    }
  }
};
