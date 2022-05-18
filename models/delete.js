const deleteMovie = async (id) => {
  return await Movie.destroy({
    where: {
      id: id,
    },
  });
};


module.exports = deleteMovie;