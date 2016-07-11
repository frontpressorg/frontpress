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

    function processResponses(responses){
        fs.writeFile('./frontpress.json', JSON.stringify(responses), { overwrite: true }, function (err) {
          if (err) throw err;
          console.log('Thanks for using frontpress!');
        });
    }

    var task;

    if (fs.existsSync('./frontpress.json') === false) {
        console.log('Let\'s start by settings you blog information.');
        task = inquirer.prompt(questions).then(processResponses);
    }


	return task;




}
