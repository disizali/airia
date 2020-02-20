const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
// const cookieParser = require("cookie-parser");

const corsOptions = {
  origin: "*"
};
const TOUR_SERVICE = "http://localhost:3002";
const USER_SERVICE = "http://localhost:3003";
const PAYMENT_SERVICE = "http://localhost:3004";
const MAGAZINE_SERVICE = "http://localhost:3005";
const FILES_SERVICE = "http://localhost:3006";

app.use(cors(corsOptions));
app.use(express.json());
app.use(async (req, res, next) => {
  if (req.header("authorization") == undefined) {
    req.auth = false;
    return next();
  }
  const token = req.header("authorization").replace("Bearer ", "");
  if (token == "") {
    req.auth = false;
    return next();
  }

  const { data } = await axios.post(`${USER_SERVICE}/token`, {
    token
  });
  if (data == "unauthorized") {
    req.auth = false;
    return next();
  }
  req.auth = true;
  req.user = data;
  return next();
});

app.get("/", async (req, res) => {
  res.send("wait for your command ...");
});

app.get("/tours", async (req, res) => {
  const { data } = await axios.get(`${TOUR_SERVICE}/tours`);
  res.send(data);
});
app.put("/tours/:id", async (req, res) => {
  const { data: result } = await axios.put(
    `${TOUR_SERVICE}/tours/${req.body.id}`,
    req.body
  );
  res.send(result);
});

app.get("/parents", async (req, res) => {
  const { data } = await axios.get(`${TOUR_SERVICE}/parents`);
  res.send(data);
});

app.get("/tours/:id", async (req, res) => {
  const { data } = await axios.get(`${TOUR_SERVICE}/tours/${req.params.id}`);
  res.send(data);
});
app.get("/tours/search/:query", async (req, res) => {
  const { data } = await axios.get(
    `${TOUR_SERVICE}/tours/search/${encodeURI(req.params.query)}`
  );
  res.send(data);
});

app.get("/categories", async (req, res) => {
  const { data } = await axios.get(`${TOUR_SERVICE}/categories`);
  res.send(data);
});

app.get("/categories/:id", async (req, res) => {
  const { data } = await axios.get(
    `${TOUR_SERVICE}/categories/${req.params.id}`
  );
  res.send(data);
});

app.options("/register", (req, res) => {
  res.sendStatus(200);
});
app.post("/register", async (req, res) => {
  const { data } = await axios.post(`${USER_SERVICE}/register`, req.body);
  res.send(data);
});

app.post("/login", async (req, res) => {
  const { data } = await axios.post(`${USER_SERVICE}/login`, req.body);
  res.send(data);
});

app.get("/profile", async (req, res) => {
  // const { data } = await axios.get(`${USER_SERVICE}/profile`);
  if (req.auth) {
    return res.send(req.user);
  }
  res.send("unauthorized");
});

app.put("/profile", async (req, res) => {
  const { data } = await axios.put(`${USER_SERVICE}/profile`, {
    id: req.user.id,
    ...req.body
  });
  res.send(data);
});

app.put("/favorites", async (req, res) => {
  const { data } = await axios.put(`${USER_SERVICE}/favorites`, req.body);
  res.send(data);
});

app.post("/payment/reserve", async (req, res) => {
  const { data } = await axios.post(`${PAYMENT_SERVICE}/reserve`, {
    ...req.body,
    user: req.user
  });
  res.send(data);
});

app.post("/payment/reserve/verify", async (req, res) => {
  const { data } = await axios.post(
    `${PAYMENT_SERVICE}/reserve/verify`,
    req.body
  );
  res.send(data);
});

app.post("/payment/credit", async (req, res) => {
  const { data } = await axios.post(`${PAYMENT_SERVICE}/credit`, req.body);
  res.send(data);
});

app.post("/payment/credit/verify", async (req, res) => {
  const { data } = await axios.post(
    `${PAYMENT_SERVICE}/credit/verify`,
    req.body
  );
  res.send(data);
});

app.get("/magazine", async (req, res) => {
  const { data } = await axios.get(`${MAGAZINE_SERVICE}/`, req.body);
  res.send(data);
});

app.get("/magazine/:id", async (req, res) => {
  const { data } = await axios.get(
    `${MAGAZINE_SERVICE}/${req.params.id}`,
    req.body
  );
  res.send(data);
});

app.get("/magazine/search/:query", async (req, res) => {
  const { data } = await axios.get(
    `${MAGAZINE_SERVICE}/search/${encodeURI(req.params.query)}`
  );
  res.send(data);
});

app.post("/files", async (req, res) => {
  const { data } = await axios.post(`${FILES_SERVICE}`, req.body);
  res.send(data);
});

app.listen(3001);
