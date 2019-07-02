const express = require("express");
const addressService = require("../services/address.service");

const addressController = () => {

  const router = express.Router();

  router.get("/address/cep/:cep", async (req, res) => {
    try {
      const cep = req.params.cep;
      const result = await addressService.streetByCep(cep);
      res.send(result);
    
    } catch (error) {
     console.log(error);
     res.status(error.status).send(error.message);  
    }

  });


  return router;

};

module.exports = addressController();