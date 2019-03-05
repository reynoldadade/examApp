var express = require('express');
var router = express.Router();
var ctrlExams = require('../api/controllers/exams.controllers.js');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//get exams
router
    .route('/:userId/exams')
    .get(ctrlExams.examsGetAll) ; //find exams
    //.post(ctrlExams.examsAddOne); //add exams


module.exports = router;


