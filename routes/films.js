const express = require('express');

const filmsRouter = express.Router();

filmsRouter.get('/', (req, res) => {
  res.send('films');
});

module.exports = filmsRouter;
