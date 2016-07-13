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
    .into(app);
});

app.listen(app.get('port'));

module.exports = app;