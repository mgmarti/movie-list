const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new MovieSchema object
const MovieSchema = new Schema({
    name: String,
    image: String
});


// Compiles into model and saves to a variable
// This creates our model from the above schema, using mongoose's model method
//'Movie' is name of singular version of model and Creates the collection
const Movie = mongoose.model('Movie', MovieSchema);

//Exports model
module.exports = Movie;