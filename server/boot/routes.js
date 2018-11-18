
var dsConfig = require('../datasources.json');
var path = require('path');

module.exports = function(app) {
  var User = app.models.Broker;


// //send an email with instructions to reset an existing user's password
//   app.post('/request-password-reset', function(req, res, next) {
//     User.resetPassword({
//       email: req.body.email
//     }, function(err) {
//       if (err) return res.status(401).send(err);

//       res.render('response', {
//         title: 'Password reset requested',
//         content: 'Check your email for further instructions',
//         redirectTo: '/',
//         redirectToLinkText: 'Log in'
//       });
//     });
//   });

}