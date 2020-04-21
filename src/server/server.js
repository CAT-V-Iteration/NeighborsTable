const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');

const PORT = 3000; 

const app = express();

// parses into json
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('dist'));

// access api router
app.use('/api', apiRouter);

// catches bad routes
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

// global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Server Error');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${3000}!`)
});

module.exports = app;
