const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  db: {
    url: process.env.DB_URL,
  },
  secret: {
    key: process.env.SECRET,
  },
  application : { 
    port : process.env.PORT,
  }
};
