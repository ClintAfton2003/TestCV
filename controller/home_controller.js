const Profile = require('../models/about_model');
const Contact = require('../models/contact_model');

async function index(req, res, next) {
  const profiles = await Profile.find({});
  const contacts = await Contact.find({});

  res.render('index', {
    title: 'Our CV2',
    page: req.url,
    profile: profiles[0],
    contact: contacts[0],
  });
}
module.exports = { index };
