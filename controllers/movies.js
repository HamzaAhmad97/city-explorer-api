const Movie = require('../models/movieClass');
const axios = require("axios");

const movies = (req, res) => {
  let { cityName } = req.query;
  axios
    .get(
      `https://api.themoviedb.org/3/search/multi?api_key=75fbb8b57ad623af72798c104939a832&query=${cityName}`
    )
    .then((val) => {
      let arr = [];

      val.data.results
        .filter((itm) => itm.media_type === "movie")
        .map((itm) => {
          let { title, vote_average, poster_path, popularity, release_date } =
            itm;
          arr.push(
            new Movie({
              title,
              vote_average,
              poster_path,
              popularity,
              release_date,
            })
          );
          return;
        });
      res.send(arr).status(200);
    })
    .catch((err) =>
      res.status(404).send("an error occured, please try again." + err.status)
    );
}

module.exports = movies;