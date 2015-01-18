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
        if (!loc) return reject(new Error('Redirect not working'));
        request.get(loc + '.json').end(function(ress) {
          resolve(ress.body);
        });
      });
  });
};

var langs = ["c/gcc-4.4.3", "c/gcc-4.9.1", "c++/c++11-gcc-4.9.1", "c++/gcc-4.4.3", "c++/gcc-4.9.1", "coffeescript/node-0.10.29-coffee-1.7.1", "fortran/f95-4.4.3", "haskell/hugs98-sep-2006", "io/io-20131204", "javascript/node-0.10.29", "lua/lua-5.1.5", "lua/lua-5.2.3", "ocaml/ocaml-4.01.0", "php/php-5.5.14", "pascal/fpc-2.6.4", "perl/perl-5.20.0", "python/cpython-2.7.8", "python/cpython-3.4.1", "ruby/mri-1.0", "ruby/mri-1.8.7", "ruby/mri-1.9.3", "ruby/mri-2.0.0", "ruby/mri-2.1", "ruby/mri-2.2", "slash/slash-head", "assembly/nasm-2.07"];

module.exports.langs = langs;
