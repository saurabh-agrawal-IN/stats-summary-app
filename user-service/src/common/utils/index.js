const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const amqplib = require("amqplib");

const {
  APP_SECRET,
  EXCHANGE_NAME,
  CUSTOMER_SERVICE,
  MSG_QUEUE_URL,
} = require("../config");

// Utility functions
(module.exports.generateSalt = async () => {
  return await bcrypt.genSalt();
}),
  (module.exports.generatePassword = async (password, salt) => {
    return await bcrypt.hash(password, salt);
  });

module.exports.validatePassword = async (
  enteredPassword,
  savedPassword,
  salt
) => {
  return (await this.generatePassword(enteredPassword, salt)) === savedPassword;
};

(module.exports.generateSignature = async (payload) => {
  return await jwt.sign(payload, APP_SECRET, { expiresIn: "1d" });
}),
  (module.exports.validateSignature = async (req) => {
    const signature = req.get("Authorization");

    if (signature) {
      const payload = await jwt.verify(signature.split(" ")[1], APP_SECRET);
      req.user = payload;
      return true;
    }

    return false;
  });

module.exports.formatData = (data) => {
  if (data) {
    return { data };
  } else {
    throw new Error("Data Not found!");
  }
};

