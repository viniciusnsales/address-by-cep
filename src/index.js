const express = require("express");
const streetController = require("./controllers/address.controller");

const app = express();

const port = 5000;

app.use(streetController);

app.listen(port, () => {

  console.log(`started on port ${port}`);

});