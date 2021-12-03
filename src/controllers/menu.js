const models = require("../models");
const Menu = models.Menu;

exports.findAll = async (req, res) => {
  try {
    const data = Menu.findAll();
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
    menuName: req.body.menuName,
    price: req.body.price,
    categoryId: req.body.categoryId,
  };

  try {
    const data = Menu.create(menu);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};
