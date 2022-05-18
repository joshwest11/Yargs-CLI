const { DataTypes } = require("sequelize");
const db = require("../connection");
const Actor = require("./actor");
const Movie = require("./movie");

const Genre = db.define("Genre", {
    name: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
}, {
    indexed: [{unique: true, fields: ["name"]}]
});

// Genre.belongsTo(Actor);

module.exports = Genre;