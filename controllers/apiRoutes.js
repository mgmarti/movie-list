//Pre database Code
const movies = require("../data/movieData");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.render("home");
    });

    app.get("/movies", function (req, res) {
        //movieData = what you want to call | movies = data being passed in
        res.render("movieList", {
            movieData: movies
        });
    });

    app.post("/movies", function (req, res) {
        const movieName = req.body.movieName;
        const image = req.body.image;
        let newMovie = {
            name: movieName,
            image: image
        };

        movies.push(newMovie);

        res.redirect("/movies")
    });
}