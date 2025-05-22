/*\
title: $:/plugins/bj/twd/twindsetup.js
type: application/javascript
module-type: library

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";




var twind =require ("$:/plugins/bj/twd/lib/twind.js")

twind.setup({
  preflight: false,   // ← no more Tailwind-style reset
})
/*
Run the macro
*/
exports.tw = twind.tw;


})();