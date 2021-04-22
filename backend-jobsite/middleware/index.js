const jwt = require('jsonwebtoken');
const { secret } = require('../config');

module.exports = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).json({ Status: 'Authorization denied. No token.' });
  }
  try {
    const decoded = jwt.verify(token, secret.key);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ status: 'Token is not valid' });
  }
};
