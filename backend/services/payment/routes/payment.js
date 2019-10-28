const express = require("express");
const router = express.Router();
const { sequelize: db, Sequelize } = require("../../../models");
const { Reserve, Capacity } = db.models;
const axios = require("axios");

router.post("/reserve", async (req, res) => {
  const {
    count,
    MerchantID,
    Amount,
    CallbackURL,
    Description,
    UserId,
    DateId
  } = req.body;
  if (
    !count ||
    !MerchantID ||
    !Amount ||
    !CallbackURL ||
    !Description ||
    !UserId ||
    !DateId
  )
    return res.send("wrong data");
  const { data } = await axios.post(
    "https://sandbox.zarinpal.com/pg/rest/WebGate/PaymentRequest.json",
    { ...req.body },
    {
      headers: {
        "cache-control": "no-cache",
        "content-type": "application/json"
      }
    }
  );
  if (data.Status == 100) {
    await Reserve.create({
      authority: Number(data.Authority),
      amount: Amount,
      status: 0,
      refID: 0,
      count,
      DateId,
      UserId
    });
    return res.json(data);
  } else {
    return res.send("wrong data");
  }
});

router.post("/verify", async (req, res) => {
  const { MerchantID, Authority } = req.body;
  if (!MerchantID || !Authority) return res.send("wrong data");
  const reserve = await Reserve.findOne({
    where: { authority: Number(Authority) },
    attributes: ["amount","count", "DateId"]
  });
  req.body.Amount = `${reserve.amount}`;
  const { data } = await axios.post(
    "https://sandbox.zarinpal.com/pg/rest/WebGate/PaymentVerification.json",
    { ...req.body },
    {
      headers: {
        "cache-control": "no-cache",
        "content-type": "application/json"
      }
    }
  );
  console.log(data);
  if (data.Status == 100 || data.Status == 101) {
    await Reserve.update(
      {
        status: 1,
        refID: data.RefID
      },
      {
        where: {
          authority: Number(Authority)
        }
      }
    );
    await Capacity.update(
      { count: Sequelize.literal(`count - ${reserve.count}`) },
      { where: { DateId: reserve.DateId } }
    );
    return res.json("verified");
  } else {
    return res.send("wrong data");
  }
});

module.exports = router;
