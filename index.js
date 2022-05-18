require("dotenv").config();

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
// const bcrypt = require("bcrypt");
const Movie = require("./models/movie");
const Actor = require("./models/actor");
const Genre = require("./models/genre");
const add = require("./models/add");
const findAll = require("./models/find");
const deleteMovie = require("./models/delete");
const updateMovie = require("./models/update");


const saltRounds = parseInt(process.env.SALT_ROUNDS);

const connection = require("./connection");
const User = require("./user");
const { sync } = require("./connection");
const findAll = require("./models/find");
//npm start -- --register --name "Jimbob" --fullname "Jim Dogson" --password "walkies"
(async (argv) => {

    await Movie.sync({alter: true});
    await Genre.sync({alter: true});
    await Actor.sync({alter: true});

    // Actor.Movie = Actor.hasMany(Movie, { primaryKey: 'actorID' });
    // Movie.Actor = Movie.belongsTo(Actor, {
    //   foreignKey: 'actorID',
    // });
    // Genre.Movie = Genre.hasMany(Movie, { primaryKey: 'genreID' });
    // Movie.Genre = Movie.belongsTo(Genre, {
    //   foreignKey: 'genreID',
    // });

    if (argv.add) {
        await add (argv)
       } else if (argv.findAll) {
            await findAll (argv)
       } else if (argv.update) {
            await updateMovie(argv.id, argv.title)
       } else if (argv.delete) {
           await deleteMovie(argv.id)
       };
 
    await  User.sync({alter: true});

    if(argv.register && argv.name && argv.fullname && argv.password) {
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPass = await bcrypt.hash(argv.password, salt);
        
        const user = await User.create({name: argv.name, fullname: argv.fullname, password: hashedPass});
    } else if(argv.getuser && argv.name && argv.password) {
        const user = await User.findOne({where: {name: argv.name}});
        
        if(!user) {
            console.log("Invalid user");
        }
        
        const matched = await bcrypt.compare(argv.password, user.password);
        if(matched) {
            console.log(`${user.fullname} has logged in`);
        } else {
            console.log("Password is incorrect");
        }
    }
})
(argv);