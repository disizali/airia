const express = require("express");
const { sequelize: db } = require("../../../models");
const { User, Profile } = db.models;
const { Op } = db.Sequelize;
const router = express.Router();
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/token", async (req, res) => {
  const { token } = req.body;
  if (token == "" || token == "undefined") {
    return res.send("unauthorized");
  }
  const id = jwt.verify(token, "airiasecret");
  if (id) {
    const dbUser = await User.findOne({
      where: { id },
      attributes: ["id", "email", "phone"],
      include: [{ model: Profile }]
    });
    if (dbUser) {
      return res.send(dbUser);
    }
  }
});

router.post("/register", async (req, res) => {
  const schema = Joi.object().keys({
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .required(),
    email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required(),
    phone: Joi.number().required()
  });

  const { error } = Joi.validate(req.body, schema);
  var salt = bcrypt.genSaltSync(10);
  req.body.password = bcrypt.hashSync(req.body.password, salt);

  if (null == error) {
    const [dbUser, newUser] = await User.findOrCreate({
      where: {
        [Op.or]: [{ phone: req.body.phone }, { email: req.body.email }]
      },
      defaults: req.body
    });
    if (newUser) {
      return res.send("ok");
    } else {
      return res.send("duplicate");
    }
  }
  return res.status(400).send(`${error.details[0].path[0]} error `);
});

router.post("/login", async (req, res) => {
  const schema = Joi.object().keys({
    username: Joi.string(),
    password: Joi.number()
  });

  const { error } = Joi.validate(req.body, schema);
  if (!error) {
    const dbUser = await User.findOne({
      where: {
        [Op.or]: [{ phone: req.body.username }, { email: req.body.username }]
      }
    });
    if (!dbUser) {
      return res.status(400).send("login failed");
    }
    const result = bcrypt.compareSync(req.body.password, dbUser.password);
    if (!result) {
      return res.status(400).send("login failed");
    }
    const token = jwt.sign(dbUser.id, "airiasecret");
    return res.send(token);
  } else {
    return res.send(error);
  }
});

module.exports = router;
