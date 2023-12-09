const Band = require('../models/Band');

module.exports = {
  getIndex: function (req, res) {
    Band.find()
    .then(band => {
      res.render('index', {
        'bands': band
      });
    });
   // res.render('index');
  },
  getCreate: function (req, res) {
    res.render('create');
  },
  postCreate: function (req, res) {
    Band.create(req.body) // the parameter is an object
    .then(() => res.redirect('/'))
    .catch(() => res.redirect('create'));
  },
  getEdit: function (req, res) {
    let id = req.params.id;

    Band.findById(id)
      .then((band) => {
        return res.render('edit', {
          band
        });
      });
  },
  postEdit: function (req, res) {
   let id = req.params.id;
   let updateBand = req.body;
   Band.findByIdAndUpdate(id, updateBand)
     .then(() => res.redirect('/'))
     .catch(() => res.redirect('create'));
  },
  getDelete: function (req, res) {
    let id = req.params.id;

    Band.findById(id)
      .then((band) => {
        return res.render('delete', {
          band
        });
      });
  },
  postDelete: function (req, res) {
    // TODO:
    let id = req.params.id;
    Band.findByIdAndRemove(id)
    .then(() => res.redirect('/'));
  }
};