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
    vote_averge,
    poster_path,
    popularity,
    release_date
  ) {
    this.title = title;
    this.vote_averge = vote_averge;
    this.poster_path = poster_path;
    this.popularity = popularity;
    this.release_date = release_date;
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
          vote_averge,
          poster_path,
          popularity,
          release_date,
        } = itm;
        arr.push(
          new Movie({
            title,
            vote_averge,
            poster_path,
            popularity,
            release_date,
          })
        );
        return;
      });
      res.json(arr).status(200);
    })
    .catch((err) =>
      res.status(404).send('an error occured, please try again.' + err.status)
    );
});

app.listen(PORT, () => {
  console.log('Server started and listening on port 8080');
});
