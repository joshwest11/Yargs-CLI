
const { DataTypes } = require("sequelize");
const db = require("../connection");

const Actor = db.define("Actor", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
}, {
    indexed: [{unique: true, fields: ["name"]}]
});

// Actor.belongsTo(Movie);

module.exports = Actor;