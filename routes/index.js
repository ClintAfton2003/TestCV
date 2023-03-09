var express = require('express');
var router = express.Router();

const homeController = require('../controller/home_controller');
const aboutController = require('../controller/about_controller');
const educationController = require('../controller/education_controller');

/* GET home page. */
router.get('/', homeController.index);
router.get('/about', aboutController.index);
router.get('/education', educationController.index);

module.exports = router;
