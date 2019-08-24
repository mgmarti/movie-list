const mongoose = require("mongoose");
const movies = require("../data/movieData");
const db = require('../models');

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.render("home");
    });

    app.get("/movies", function (req, res) {
        //movieData = what you want to call | movies = data being passed in
        // res.render("movieList", {
        //     movieData: movies
        // });

        //Find all movies
        db.Movie.find({}, function (err, allMovies) {
            if (err) {
                console.log(err)
            } else {
                res.render("movieList", {
                    movieData: allMovies
                })
            }
        })
    });

    app.post("/movies", function (req, res) {
        const movieName = req.body.movieName;
        const image = req.body.image;
        let newMovie = {
            name: movieName,
            image: image
        };

        //Create a new campground and save to DB
        db.Movie.create(newMovie, function (err, newMovie) {
            if (err) {
                console.log(err)
            } else {
                res.redirect("/movies")
            }
        })

        // movies.push(newMovie);

        // res.redirect("/movies")
    });
}