const admin = require("../config/firebase");
const models = require("../models");
class Middleware {
  async verifyToken(req, res, next) {
    if (req.headers.authorization) {
      try {
        const accessToken = req.headers.authorization.split(" ")[1];
        const decode = await admin.auth().verifyIdToken(accessToken);
        const user = await models.User.findOne({
          where: { email: decode.email },
        });
        req.user = user;
        if (user == null) {
          const add = {
            firstName: decode.name.substr(0, decode.name.indexOf(" ")),
            lastName: decode.name.substr(decode.name.indexOf(" ") + 1),
            email: decode.email,
            loginMethod: decode.firebase.sign_in_provider,
            picture: decode.picture,
            firebaseUserId: decode.uid,
            role: "customer",
          };
          try {
            const data = await models.User.create(add);
            req.user = add;
          } catch (err) {
            console.log(err.message);
            res.status(500).send({
              message: err.message,
            });
          }
        }
        next();
      } catch (e) {
        console.log(e);
        res.status(401).json();
      }
    }
  }
}
module.exports = new Middleware();
