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

var langs = [{
  "id": "c/gcc-4.4.3",
  "name": "C / GCC 4.4.3"
}, {
  "id": "c/gcc-4.9.1",
  "name": "C / GCC 4.9.1"
}, {
  "id": "c++/c++11-gcc-4.9.1",
  "name": "C++ / C++11 (GCC 4.9.1)"
}, {
  "id": "c++/gcc-4.4.3",
  "name": "C++ / GCC 4.4.3"
}, {
  "id": "c++/gcc-4.9.1",
  "name": "C++ / GCC 4.9.1"
}, {
  "id": "coffeescript/node-0.10.29-coffee-1.7.1",
  "name": "CoffeeScript / CoffeeScript 1.7.1 (Node 0.10.29)"
}, {
  "id": "fortran/f95-4.4.3",
  "name": "Fortran / F95 (GCC 4.4.3)"
}, {
  "id": "haskell/hugs98-sep-2006",
  "name": "Haskell / Hugs98 September 2006"
}, {
  "id": "io/io-20131204",
  "name": "Io / Io 20131204"
}, {
  "id": "javascript/node-0.10.29",
  "name": "JavaScript / Node 0.10.29"
}, {
  "id": "lua/lua-5.1.5",
  "name": "Lua / Lua 5.1.5"
}, {
  "id": "lua/lua-5.2.3",
  "name": "Lua / Lua 5.2.3"
}, {
  "id": "ocaml/ocaml-4.01.0",
  "name": "OCaml / OCaml 4.01.0"
}, {
  "id": "php/php-5.5.14",
  "name": "PHP / PHP 5.5.14"
}, {
  "id": "pascal/fpc-2.6.4",
  "name": "Pascal / Free Pascal 2.6.4"
}, {
  "id": "perl/perl-5.20.0",
  "name": "Perl / Perl 5.20.0"
}, {
  "id": "python/cpython-2.7.8",
  "name": "Python / CPython 2.7.8"
}, {
  "id": "python/cpython-3.4.1",
  "name": "Python / CPython 3.4.1"
}, {
  "id": "ruby/mri-1.0",
  "name": "Ruby / MRI 1.0"
}, {
  "id": "ruby/mri-1.8.7",
  "name": "Ruby / MRI 1.8.7"
}, {
  "id": "ruby/mri-1.9.3",
  "name": "Ruby / MRI 1.9.3"
}, {
  "id": "ruby/mri-2.0.0",
  "name": "Ruby / MRI 2.0.0"
}, {
  "id": "ruby/mri-2.1",
  "name": "Ruby / MRI 2.1"
}, {
  "id": "ruby/mri-2.2",
  "name": "Ruby / MRI 2.2"
}, {
  "id": "slash/slash-head",
  "name": "Slash / Slash HEAD"
}, {
  "id": "assembly/nasm-2.07",
  "name": "x86 Assembly / NASM 2.07"
}];

module.exports.langs = langs;
