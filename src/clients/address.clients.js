const superagent = require("superagent");
const Adress = require("../models/address.model");

const BASE_API = "viacep.com.br/ws/";

const addressClient = () => {

  const streetByCep = async (cep) => {

    const streetResponse = await superagent.get(`${BASE_API}${cep}/json/`);

    const body = streetResponse.body;

    return new Adress ({
      street: body.logradouro,
      neighborhood: body.bairro,
      city: body.localidade,
      state: body.uf,
    });

  };

  return {
    streetByCep,
  };
};

module.exports = addressClient();