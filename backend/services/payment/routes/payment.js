const express = require("express");
const router = express.Router();
const { sequelize: db, Sequelize } = require("../../../models");
const { Reserve, Capacity, Credit } = db.models;
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

router.post("/reserve/verify", async (req, res) => {
  const { MerchantID, Authority } = req.body;
  if (!MerchantID || !Authority) return res.send("wrong data");
  const reserve = await Reserve.findOne({
    where: { authority: Number(Authority) },
    attributes: ["amount", "count", "DateId"]
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
  if (data.Status == 100) {
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
  } else if (data.Status == 101) {
    return res.json("verified");
  } else {
    return res.send("wrong data");
  }
});

router.post("/credit", async (req, res) => {
  const { MerchantID, Amount, CallbackURL, Description, UserId } = req.body;
  if (!MerchantID || !Amount || !CallbackURL || !Description || !UserId)
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
    await Credit.create({
      authority: Number(data.Authority),
      amount: Amount,
      status: 0,
      refID: 0,
      UserId,
      type: 1
    });
    return res.json(data);
  } else {
    return res.send("wrong data");
  }
});

router.post("/credit/verify", async (req, res) => {
  const { MerchantID, Authority } = req.body;
  if (!MerchantID || !Authority) return res.send("wrong data");
  const credit = await Credit.findOne({
    where: { authority: Number(Authority) },
    attributes: ["amount"]
  });
  req.body.Amount = `${credit.amount}`;
  req.body.type = 1;
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
  if (data.Status == 100) {
    await Credit.update(
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
    return res.json("verified");
  } else if (data.Status == 101) {
    return res.json("verified");
  } else {
    return res.send("wrong data");
  }
});
module.exports = router;
