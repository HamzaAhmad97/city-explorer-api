const Forecast = require('../models/forecastClass');
const axios = require("axios");
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const weather = (req, res) => {
  let { lat, lon } = req.query;
  axios
    .get(
      `http://api.weatherbit.io/v2.0/forecast/daily/?lat=${lat}&lon=${lon}&key=${WEATHER_API_KEY}`
    )
    .then((val) => {
      let arr = [];
      val.data.data.map((itm) => {
        let { clouds, temp, wind_dir, datetime } = itm;
        arr.push(
          new Forecast(
            datetime,
            `${
              clouds ? "Cloudy" : "No clouds"
            }, the temperature is about ${temp}c, and the wind direction is ${wind_dir} degrees.`
          )
        );
        return;
      });
      res.send(arr).status(200);
    })
    .catch((err) =>
      res.status(404).send("an error occured, please try again." + err.status)
    );
}

module.exports = weather;