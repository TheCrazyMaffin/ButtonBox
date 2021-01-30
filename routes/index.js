const express = require('express');
const fs = require('fs');
const path = require('path');
const { address } = require('ip');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/:game/iframe', (req, res, next) => {
  if (fs.existsSync(path.join(process.cwd(), `/templates/${req.params.game}.json`))) {
    res.render('buttonbox', { layout: JSON.parse(fs.readFileSync(path.join(process.cwd(), `/templates/${req.params.game}.json`))), ip: address() });
  } else {
    next();
  }
});

router.get('/:game', (req, res, next) => {
  if (fs.existsSync(path.join(process.cwd(), `/templates/${req.params.game}.json`))) {
    res.render('buttonbox-container', { game: req.params.game });
  } else {
    next();
  }
});

module.exports = router;
