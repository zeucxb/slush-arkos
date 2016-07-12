const express = require('express');
const consign = require('consign');

const app = express();

require('strict-mode')(function () {
  consign()
    .include('configs')
    .then('helpers')
    .then('drivers')
    .then('interpreters')
    .then('models')
    .then('routes')
    .then('boot.js')
    .into(app);
});