const Profile = require('../models/about_model');
const Education = require('../models/education_model');

async function index(req, res, next) {
  const profiles = await Profile.find({});
  const educations = await Education.find({});
  res.render('index', { title: 'Our CV2', page: req.url, profile: profiles[0], educations });
}
module.exports = { index };
