'use strict';

var config = require('../../server/config.json');
var path = require('path');
var senderAddress = "noreply@asksage.com"; //Replace this address with actual address

module.exports = function (Broker) {
  //   Broker.disableRemoteMethodByName('create');
  //   Broker.disableRemoteMethodByName('upsert');
  //   Broker.disableRemoteMethodByName('updateAll');
  //   Broker.disableRemoteMethodByName('prototype.updateAttributes');

  //   Broker.disableRemoteMethodByName('find');
  //   // Broker.disableRemoteMethodByName('findById');
  //   Broker.disableRemoteMethodByName('findOne');

  //   Broker.disableRemoteMethodByName('deleteById');

  //   Broker.disableRemoteMethodByName('confirm');
  //   Broker.disableRemoteMethodByName('count');
  //   Broker.disableRemoteMethodByName('exists');
  //   Broker.disableRemoteMethodByName('resetPassword');

  //   Broker.disableRemoteMethodByName('prototype.__count__accessTokens');
  //   Broker.disableRemoteMethodByName('prototype.__create__accessTokens');
  //   Broker.disableRemoteMethodByName('prototype.__delete__accessTokens');
  //   Broker.disableRemoteMethodByName('prototype.__destroyById__accessTokens');
  //  // // Broker.disableRemoteMethodByName('prototype.__findById__accessTokens');
  //   Broker.disableRemoteMethodByName('prototype.__get__accessTokens');
  //   Broker.disableRemoteMethodByName('prototype.__updateById__accessTokens');
  //   Broker.disableRemoteMethodByName('upsertWithWhere');
  // "*": false,

  Broker.greet = function (msg, cb) {
    console.log('from Broker endpoint');

    Broker.app.models.Email.send({
      to: 'wawanesainnolab@gmail.com',
      from: 'noreply@ask-sage.com',
      subject: 'Ask Sage...Welcome',
      text: 'my text',
      html: '<h1> Welcome </h1> '+ msg
    }, function (err, mail) {
      console.log(mail);
      cb(err, 'Email sent... SUCCESS');
    });


   
    
  };
  // send an email
  Broker.sendEmail = function (cb) {
    Broker.app.models.Email.send({
      to: 'wawanesainnolab@gmail.com',
      from: 'wawanesainnolab@gmail.com',
      subject: 'my subject',
      text: 'my text',
      html: 'my <em>html</em>'
    }, function (err, mail) {
      console.log('email sent!');
      cb(err);
    });
  }




  Broker.remoteMethod('greet', {
    accepts: { arg: 'input', type: 'string' },
    returns: { arg: 'greeting', type: 'string' }
  });

  // Broker.afterRemote('login', function (ctx, data, next) {
  //if first time logging in prompt for password
  // console.log(ctx, data, next);
  // });


  // Broker.on('resetPasswordRequest', function (info) {
  //   console.log(info.email); // the email of the requested user
  //   console.log(info.accessToken.id); // the temp access token to allow password reset 
  //   // requires AccessToken.belongsTo(User)
  //   info.accessToken.broker(function(err, user) {
  //     console.log(Broker); // the actual user
  //   });
  // });


  // //send verification email after registration
  // Broker.afterRemote('create', function(context, user, next) {
  //   var options = {
  //     type: 'email',
  //     to: user.email,
  //     from: senderAddress,
  //     subject: 'Thanks for registering.',
  //     template: path.resolve(__dirname, '../../server/views/verify.ejs'),
  //     redirect: '/verified',
  //     user: user
  //   };

  //   user.verify(options, function(err, response) {
  //     if (err) {
  //       User.deleteById(user.id);
  //       return next(err);
  //     }
  //     context.res.render('response', {
  //       title: 'Signed up successfully',
  //       content: 'Please check your email and click on the verification link ' +
  //           'before logging in.',
  //       redirectTo: '/',
  //       redirectToLinkText: 'Log in'
  //     });
  //   });
  // });








};
