const Actor = require("./actor");
const Movie = require("./movie");
const Genre = require("./genre");

const add = async (argv) => {
    const addMovie = await Movie.create({
        title: argv.title
    });
    console.log(addMovie.dataValues.title);
    const addGenre = await Genre.create({ 
        name: argv.genreName,
        MovieId: addMovie.id
  });
  const addActor = await Actor.create({ 
    name: argv.actorName,
    MovieId: addMovie.id
  });
}



module.exports = add;
// (async (argv) => {
// Movie.create = add({
//     title: argv.title,
//     actor: argv.actor,
//     genre: argv.genre
// })});