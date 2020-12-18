require("dotenv").config();

module.exports = {
  mongoUri: process.env.MONGO_URI || process.env.MONGODB_URI,
  PORT: process.env.PORT || 3000,
};
