const models = require("../models");

const User = models.User;

exports.findAll = async (req, res) => {
  try {
    const data = User.findAll();
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

exports.create = (req, res) => {
  // Validate request
  if (!req.body.menuName) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const menu = {
    firstName: req.body.firstName,
    lastName: req.body.price,
    email: req.body.email,
    role: req.body.role,
  };

  try {
    const data = User.create(menu);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

exports.me = async (req, res, nxt) => {
  email = req.user && req.user.email;
  if (email) {
    try {
      const Point = models.UserPoint;
      const user = await User.findOne({
        where: {
          email: email,
        },
      });
      const point = await Point.findOne({
        where: {
          userId: user.id,
        },
      });
      if (point) {
        user.dataValues.userPoint = point.amount;
      } else {
        Point.create({ userId: user.id, amount: 100 });
        user.dataValues.userPoint = 100;
      }
      res.json(user.dataValues);
      nxt();
    } catch (e) {
      console.log(e);
    }
  } else {
    res.status(401);
  }
};
