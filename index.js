require('dotenv').config();
const express = require('express');
const app = express();
const greetingsRouter = require('./routes/greetings');
const filmsRouter = require('./routes/films');
const getMovies = require('./helpers/get-movies');

app.use('/greetings', greetingsRouter);
app.use('/films', filmsRouter);

app.use((err, req, res) => {
  console.log(err);
});

const State = {
  movies: [],
}

async function startApp() {
  State.movies = await getMovies();
  console.log(State.movies, 'state')
  app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
  })
}

void startApp()
