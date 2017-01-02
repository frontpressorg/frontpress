"use strict";

var gulp = require("gulp");
var inquirer = require("inquirer");
var fs = require("fs");

module.exports = function() {

    var questions = [{
        type: "input",
        name: "restApiUrl",
        message: "Wordpress rest api url:",
        default: "https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com"
    },{
        type: "list",
        name: "apiVersion",
        message: "What wordpress api version are you using?",
        choices: ["v1", "v2"]
    },{
        type: "confirm",
        name: "useDiqus",
        message: "Do you want to use disqus on this blog?",
        default: true
    },{
        when: function (response) {
            return response.useDiqus;
        },
        name: "disqusShortname",
        message: "Nice! Your disqus shortname:"
    }];

    function processResponses(responses) {
        var file = "./frontpress.json";
        var response = JSON.stringify(responses);

        fs.writeFile(file, response, { overwrite: true }, function(err) {
          if (err) throw err;
        });
    }

    return gulp.task("init", function(done) {
        return inquirer.prompt(questions).then(function(responses){
            processResponses(responses);
            done();
        });
    });
};
