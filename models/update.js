const updateMovie = async (id, title) => {
  //changing to
  await Movie.update(
    { title: title },
    {
      // changing from
      where: {
        id: id,
      },
    }
  );
};

module.exports = updateMovie;