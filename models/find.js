const Movie = require("./movie");
const Genre = require("./genre");

const findAll = async (argv) => {
    const findMovie = await Movie.findAll({
        title : argv.title
    })}
    // console.log(findMovie);
    // const findGenre = await Genre.findOne({ 
    //     name: argv.genreName,
    //     MovieId: addMovie.id,
    // })};
//   console.log(findMovie.dataValues.title);

module.exports = findAll;