//Dependencies
// ===================================================================
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');

const movieRoutes = require('./controllers/movies');

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.set("view engine", "ejs");

app.use(movieRoutes);

// require("./controllers/apiRoutes")(app);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/movie-list', {
    useNewUrlParser: true
});


// Start our server so that it can begin listening to client requests.
// ===================================================================

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});