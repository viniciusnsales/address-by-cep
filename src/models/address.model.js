module.exports = class Address {

  constructor({
    street,
    neighborhood,
    city,
    state,
  } = {}) {
    this.street = street;
    this.neighborhood = neighborhood;
    this.city = city;
    this.state = state;
  }

};