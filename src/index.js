const express = require("express");
const streetController = require("./controllers/address.controller");

const app = express();

const port = 5000;

app.use(streetController);
// para poder usar o do html
app.use(express.static(__dirname + "/public"));

app.listen(port, () => {

  console.log(`started on port ${port}`);

});