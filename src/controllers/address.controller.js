const express = require("express");
const addressService  =require("../services/address.service");

const addressController = () => {

  const router = express.Router();

  router.get("/address/cep/:cep", async (req, res) => {

    const cep = req.params.cep;
    const result = await addressService.streetByCep(cep);
    res.send(result);

  });

  return router;

};

module.exports = addressController();