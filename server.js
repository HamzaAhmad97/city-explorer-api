const express = require('express');
const axios = require('axios');
//const weatherData = require('./data/weather.json');
const cors = require('cors');
const app = express();
app.use(cors());
require('dotenv').config();
const PORT = process.env.PORT;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
class Forecast {
  constructor(date, description) {
    this.date = date;
    this.description = description;
  }
}
class Movie {
  constructor(
    title,
    overview,
    average_votes,
    total_votes,
    image_url,
    popularity,
    released_on
  ) {
    this.title = title;
    this.overview = overview;
    this.average_votes = average_votes;
    this.total_votes = total_votes;
    this.image_url = image_url;
    this.popularity = popularity;
    this.released_on = released_on;
  }
}
app.get('/weather', (req, res) => {
  let { lat, lon } = req.query;
  axios
    .get(
      `http://api.weatherbit.io/v2.0/forecast/daily/?lat=${lat}&lon=${lon}&key=${WEATHER_API_KEY}`
    )
    .then((val) => {
      let arr = [];
      console.log(val.data.data);
      val.data.data.map((itm) => {
        let { clouds, temp, wind_dir, datetime } = itm;
        arr.push(
          new Forecast(
            datetime,
            `${
              clouds ? 'Cloudy' : 'No clouds'
            }, the temperature is about ${temp}c, and the wind direction is ${wind_dir} degrees.`
          )
        );
        return;
      });
      res.send(arr).status(200);
    })
    .catch((err) =>
      res.status(404).send('an error occured, please try again.' + err.status)
    );
});

app.get('/movies', (req, res) => {
  let { cityName } = req.query;
  axios
    .get(
      `https://api.themoviedb.org/3/search/multi?api_key=75fbb8b57ad623af72798c104939a832&query=${cityName}`
    )
    .then((val) => {
      let arr = [];
      console.log(val.data.results.length);
      val.data.results.map((itm) => {
        let {
          title,
          overview,
          average_votes,
          total_votes,
          image_url,
          popularity,
          released_on,
        } = itm;
        arr.push(
          new Movie({
            title,
            overview,
            average_votes,
            total_votes,
            image_url,
            popularity,
            released_on,
          })
        );
        return;
      });
      res.send(arr).status(200);
    })
    .catch((err) =>
      res.status(404).send('an error occured, please try again.' + err.status)
    );
});

app.listen(PORT, () => {
  console.log('Server started and listening on port 8080');
});
