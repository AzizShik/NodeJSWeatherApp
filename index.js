const express = require('express');
const bodyParser = require('body-parser');
const weatherRequest = require('./requests/weather.request');

const openWeatherAPI = '125067d076d7a01052d6ab356be5c2af';

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', (req, res) => {
  const { city } = req.body;

  weatherRequest(city);  
  res.render('index');
});

app.listen(3000, () => {
  console.log('Server has started on posrt 3000...');

});