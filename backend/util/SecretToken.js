require("dotenv").config();
const jwt = require("jsonwebtoken");

function createSecretToken(id) {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: "3d",
  });
}

module.exports = { createSecretToken };