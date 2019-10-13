const express = require("express");
const app = express();

const routes = require("./routes");

app.use(routes);

app.listen(3001, () => {
  console.log("app is loading on port 3001");
});
