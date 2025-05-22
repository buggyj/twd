/*\
title: $:/bj/twind/macros/twd.js
type: application/javascript
module-type: macro

Macro to return a formatted version of the current time

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Information about this macro
*/

exports.name = "twd";

exports.params = [
	{name: "classes"}
];


var twind =require ("$:/plugins/bj/twd/twindsetup.js")


/*
Run the macro
*/
exports.run = function(classes) {
	return twind.tw(classes);
};

})();