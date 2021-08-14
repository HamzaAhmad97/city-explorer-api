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

module.exports= Movie;