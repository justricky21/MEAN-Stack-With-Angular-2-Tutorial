const express = require('express');
const app = express();

app.get('*', (req, res) => {
  res.send('<h1>huehue</h1>');
});

app.listen(8080, () => {
  console.log('Listening on port 8080')
});
