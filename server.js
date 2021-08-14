const express = require("express");
const axios = require("axios");
const CORS = require("cors");
const app = express();
app.use(CORS());

require("dotenv").config();
const PORT = process.env.PORT;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const weather = require('./controllers/weather');
const movies = require('./controllers/movies');
//const Movie = require('./models/movieClass');
//const Forecast = require('./models/forecastClass');

app.get("/", (req, res) => {
  res.send("API is working").status(200);
});
app.get("/weather",weather );

app.get("/movies", movies);

app.listen(PORT, () => {
  console.log("Server started and listening on port 8080");
});
