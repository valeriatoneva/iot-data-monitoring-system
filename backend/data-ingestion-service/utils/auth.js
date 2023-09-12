// utils/auth.js

const jwt = require('jsonwebtoken');

exports.requireAuth = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');

  if (!token) {
    return res.status(401).send({ error: 'Please authenticate.' });
  }

  try {
    const data = jwt.verify(token, 'YOUR_SECRET_KEY');
    req.userId = data.userId;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Not authorized to access this resource' });
  }
};
