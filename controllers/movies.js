const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get("/", function (req, res) {
    res.render("home");
});

router.get("/movies", function (req, res) {
    //movieData = what you want to call | movies = data being passed in
    // res.render("movieList", {
    //     movieData: movies
    // });

    //Find all movies
    Movie.find({}, function (err, allMovies) {
        if (err) {
            console.log(err)
        } else {
            res.render("movieList", {
                movieData: allMovies
            })
        }
    })
});

router.post("/movies", function (req, res) {
    const movieName = req.body.movieName;
    const image = req.body.image;
    let newMovie = {
        name: movieName,
        image: image
    };

    //Create a new campground and save to DB
    Movie.create(newMovie, function (err, newMovie) {
        if (err) {
            console.log(err)
        } else {
            res.redirect("/movies")
        }
    })

    // movies.push(newMovie);

    // res.redirect("/movies")
});

module.exports = router;