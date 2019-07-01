const express = require("express");
const path = require("path");
const addressService = require("../services/address.service");

const addressController = () => {

  const router = express.Router();

  router.get("/address/cep/:cep", async (req, res) => {

    const cep = req.params.cep;
    const result = await addressService.streetByCep(cep);
    res.send(result);

  });

  //rota criada para html
  router.get("/", (req, res) => {
    const viewPath = path.join(__dirname + "/../view/index.html");
    res.sendFile(viewPath);
  });


  return router;

};

module.exports = addressController();