const mongoose = require('mongoose');



// Using the Schema constructor, create a new MovieSchema object
const MovieSchema = new mongoose.Schema({
    name: String,
    image: String
});


// Compiles into model and saves to a variable
// This creates our model from the above schema, using mongoose's model method
//'Movie' is name of singular version of model and Creates the collection
// const Movie = mongoose.model('Movie', MovieSchema);

//Exports model
module.exports = Movie = mongoose.model('Movie', MovieSchema);;