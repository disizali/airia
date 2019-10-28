const express = require("express");
const router = express.Router();
const { sequelize: db } = require("../../../models");
const { Reserve } = db.models;
const axios = require("axios");

router.post("/", async (req, res) => {

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
  res.json(data);
});

module.exports = router;
