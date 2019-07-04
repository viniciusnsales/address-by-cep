const addressClient = require("../clients/address.clients");

const addressService = () => {

  const addressByCep = (cep) => {

    return addressClient.addressByCep(cep);

  };

  return {
    addressByCep,
  };

};

module.exports = addressService();