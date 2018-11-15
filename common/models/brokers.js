'use strict';

module.exports = function(Broker) {
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

  // Broker.greet = function (msg, cb) {
  //   cb(null, 'Greetings... ' + msg);
  //   console.log('from Broker endpoint');
  // };
  // Broker.remoteMethod('greet', {
  //   accepts: { arg: 'msg', type: 'string' },
  //   returns: { arg: 'greeting', type: 'string' }
  // });

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
};
