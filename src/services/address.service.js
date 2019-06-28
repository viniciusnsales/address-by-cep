const addressClient = require("../clients/address.clients");

const addressService = () => {

  const streetByCep = (cep) => {

    return addressClient.streetByCep(cep);

  };

  return {
    streetByCep,
  };

};

module.exports = addressService();