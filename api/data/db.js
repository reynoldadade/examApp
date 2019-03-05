
var mongoose = require('mongoose');//requiring mongoose
var dburl = 'mongodb://localhost:27017/examApp';//connection string to the database

mongoose.connect(dburl , {useNewUrlParser: true});//connecting to the databse tring from mongoose

mongoose.connection.on('connected',function () {//when connection is successful
    console.log('Mongoose connected to ' +dburl);
});

mongoose.connection.on('disconnected',function () {//when disconnected
    console.log('Mongoose disconnected');
});

mongoose.connection.on('error',function (err) {//when there is an error in connection
    console.log('Mongoose connection error: ' +err);
});


//MONGOOSE CONNECTION EVENTS


//WHEN CLOSED ON LINUX AND OSX
process.on('SIGINT', function () {
    mongoose.conneciton.close(function () {
        console.log('Mongoose disconnected through app termination(SIGINT)');
        process.exit(0);
    });
});

//WHEN CLOSED ON HEROKU AND OTHER HOSTING PLATFORMS
process.on('SIGTERM', function () {
    mongoose.conneciton.close(function () {
        console.log('Mongoose disconnected through app termination(SIGTERM)');
        process.exit(0);
    });
});

//WHEN CLOSED ON ANY OTHER PLATFORM OR PROCESS FROM THE ONES ABOVE
process.once('SIGUSR2', function () {
    mongoose.conneciton.close(function () {
        console.log('Mongoose disconnected through app termination(SIGTERM)');
        process.kill(process.pid, 'SIGUSR2');
    });
});

//BRING IN SCHEMA AND MODELS
require('./exams.model');