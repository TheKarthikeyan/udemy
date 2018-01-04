const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'ToDo app V1.0'
  });
});

app.get('/users', (req, res) => {
  res.status(200).send([
    {
      name: 'Karthik',
      age: 23
    },
    {
      name: 'Ramesh',
      age: 27
    },
    {
      name: 'Rajesh',
      age: 35
    }
  ]);
});

app.listen(3000);

module.exports.app = app;
