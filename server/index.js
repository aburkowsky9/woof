const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const User = require('../db/index.js');

const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}/`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '/../public/dist')));

app.post('/join', async (req, res) => {
  try {
    const nearbyUsers = await User.find({ zipCode: req.body.zipCode });
    const result = await User.create(req.body);
    console.log(result);
    res.status(201).send(nearbyUsers);
  } catch (err) {
    console.log('Mongo Error: ', err);
    res.status(400).send(err);
  }
});
