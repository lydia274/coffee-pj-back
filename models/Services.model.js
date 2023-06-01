const { Schema, model } = require("mongoose");

const ServicesSchema = new Schema({
  kidsFriendly: {
    type: Boolean,
  },
  veganOptions: {
    type: Boolean,
  },
  dogFriendly: {},
  outdoorSeating: {
    type: Boolean,
  },
  acceptCreditCards: {
    type: Boolean,
  },
  wheelchairAccess: {
    type: Boolean,
  },
});

const Services = model("Services", ServicesSchema);

module.exports = Services;
