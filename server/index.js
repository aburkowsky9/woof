const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}/`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '/../public/dist')));

app.post('/join', (req, res) => {
  console.log(req.body);
  res.send('Got it!');
});
