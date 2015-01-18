var P = require('bluebird');
var request = require('superagent');

var BASE = 'https://eval.in/';

module.exports = function(code, lang) {
  return new P(function(resolve, reject) {
    request.post(BASE).send({
        utf8: '\u03BB',
        code: code,
        execute: 'on',
        lang: lang
      })
      .set('User-Agent', 'node-evalin')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .end(function(res) {
        var loc = res.redirects[0];
        request.get(loc + '.json').end(function(ress) {
          resolve(ress.body);
        });
      });
  });
};
