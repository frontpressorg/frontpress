"use strict";

var gulp = require("gulp");
var connect = require("gulp-connect");

module.exports = function() {
    return connect.server({
        root : "./build/",
        port : 4000
    });
};
