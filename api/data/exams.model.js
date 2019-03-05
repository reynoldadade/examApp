var mongoose = require('mongoose');

//Create all other related Schemas here !!important to note
// that your reference schemas must come before your main schema so they exist when referencing them


let questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: {
        type: [String],
        required: true,
    } ,
    answer: {
        type: Number,
        required: true,
        default: 1
    }
});

let scoresSchema = new mongoose.Schema({
    studentID: {
        type: String,
        required: true
    },
    testCode: {
        type: String,
        required: true
    },
    scores: {
        type: Number,
        required: true,
        default: 0
    },
    maxScore: {
        type: Number,
        required: true,
        default: 100
    }


});

let testSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    description: String,
    date: {
        type:Date,
        required: true,
        default: Date.now()
    },
    examToughness:{
        type: Number,
        required: false,
        default: 0
    },
    question:[questionSchema],
    scores: [scoresSchema]
});


let examSchema = new mongoose.Schema({
    date: {
        required: true,
        type: Date,
        default: Date.now
    },
    examinerCode: {
        type: String,
        required: true
    },
    examinerName: {
        type: String,
        required: true
    },
    tests: [testSchema]


});


///Compiling Schema into a model and turning it into an application
mongoose.model('Exam', examSchema,'exams');
