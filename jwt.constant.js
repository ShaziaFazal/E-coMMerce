const { config } = require("dotenv");
config();

const JWTConstant = {
  secret: process.env.JWT_SECRET,
};

module.exports = JWTConstant;
