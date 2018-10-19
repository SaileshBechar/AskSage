var path = require('path'),
fs = require("fs");
exports.privateKey = fs.readFileSync(path.join(__dirname, '../deploy/privatekey.pem')).toString();
exports.certificate = fs.readFileSync(path.join(__dirname, '../deploy/certificate.pem')).toString();