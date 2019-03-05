//connect to mongoose

let mongoose  = require('mongoose');
let Exam = mongoose.model('Exam');


module.exports.examsGetAll = function () {
    let offset = 0;
    let count = 10;
    let maxCount = 20;


    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 20)
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10)
    }

};
