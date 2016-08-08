var gulp = require('gulp');
var inquirer = require('inquirer');
var fs = require('fs');

module.exports = function() {

    var questions = [{
        type: 'input',
        name: 'restApiUrl',
        message: 'Wordpress rest api url:',
        default: 'https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com'
    },{
        type: 'confirm',
        name: 'useDiqus',
        message: 'Do you want to use disqus on this blog?',
        default: true
    },{
        when: function (response) {
            return response.useDiqus;
        },
        name: 'disqusShortname',
        message: 'Nice! Your disqus shortname:'
    }];

    function processResponses(responses) {
        var file = './frontpress.json';
        response = JSON.stringify(responses);

        fs.writeFile(file, response, { overwrite: true }, function(err) {
          if (err) throw err;
        });
    }

    var task = gulp.task('init', function(done) {
        inquirer.prompt(questions).then(function(responses){
            processResponses(responses);
            done();
        });
    });

    return task;
}
