const express = require('express');
const weatherData = require('./data/weather.json');
const cors = require('cors');
const app = express();
app.use(cors());
require('dotenv').config();
const PORT = process.env.PORT;
class Forecast {
  constructor(date, description) {
    this.date = date;
    this.description = description;
  }
}
app.get('/weather', (req, res) => {
  let { searchQuery } = req.query;
  let city = weatherData.find((city) => city.city_name === searchQuery);
  if (!city) {
    res.status(404).send('An error occured, please check your entry and try again.');
  } else {
    let dataArr = [];
    city.data.forEach((itm) =>
      dataArr.push(
        new Forecast(
          itm.datetime,
          `Low of ${itm.low_temp}, high of ${itm.max_temp} with ${itm.weather.description}`
        )
      )
    );
    res.json(dataArr).status(200);
  }
});

app.listen(PORT, () => {
  console.log('Server started and listening on port 8080');
});
