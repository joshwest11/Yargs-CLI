const { DataTypes } = require("sequelize");
const db = require("../connection");
const Actor = require("./actor");
const Genre = require("./genre");

const Movie = db.define("Movie", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
}, {
    indexed: [{unique: true, fields: ["title", "actor", "genre"]}]
});
// Movie.belongsTo(Genre);
module.exports = Movie;