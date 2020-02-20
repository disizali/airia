const express = require("express");
const app = express();
const multer = require("multer");
const fs = require("fs");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(req, file, db);
    const path = "/uploads";
    fs.mkdirSync(path);
    cb(null, path);
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  }
});
const upload = multer({ storage }).single();

app.post("/", upload, (req, res) => {
  console.log("FILE ROUTE");
  res.send("route touched");
});

app.use(express.json());

app.listen(3006);
