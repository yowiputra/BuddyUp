const express = require('express');
const User = require('../models/user.js');
const jwt = require('jsonwebtoken');

let router = express.Router();
    
router.post('/', (req, res) => {
  const { tagline, blurb } = req.body;
  let token = req.headers.authorization.split(' ')[1]
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      res.status(401).json({ error: 'Failed to Authenticate' });
    } else {
      User.where({ username: decoded.username })
          .save({ tagline: tagline, blurb: blurb }, { patch: true })
          .then((model) => res.json(model)
        )
      }; 
  });
});

module.exports = router;