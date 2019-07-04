const express = require("express");
const streetController = require("./controllers/address.controller");

const app = express();

const port = 5000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(streetController);

app.listen(port, () => {

  console.log(`started on port ${port}`);

});