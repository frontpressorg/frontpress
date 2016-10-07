# Frontpress

> Oh! It's not another WordPress theme! It's a full website using WordPress API! I can't believe, sweet lord!! :raised_hands:

[![Join the chat at https://gitter.im/teles/frontpress](https://badges.gitter.im/teles/frontpress.svg)](https://gitter.im/teles/frontpress?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8da469f973d143189c352cdd852d23ca)](https://www.codacy.com/app/josetelesmaciel/frontpress?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=teles/frontpress&amp;utm_campaign=Badge_Grade)

[Github project to grade A on codacy](https://github.com/teles/frontpress/projects/2)

Full front-end AngularJS template for WordPress API. 

## 1. Clone, install and initial configs

* Clone or fork this repository
* ```npm i && bower i```
* The first time you run the app, you'll need to create a ``frontpress.json`` configuration file. 
Open the project's directory and run the following command:

````bash
gulp init
````

**OR** you can copy this repository file ``frontpress.json.sample`` and rename it to ``frontpress.json``.

You may find more [information about frontpress.json on this wiki page](https://github.com/teles/frontpress/wiki/frontpress.json).

* ```gulp templateCache```

Now, just **run the app**:

* ``` gulp ```
* Take a look on [http://localhost:4000/](http://localhost:4000/)

## Tests

### Initial configurations

* [Install nvm](https://github.com/creationix/nvm/blob/master/README.markdown)
* nvm install 5.0

### Executing testing suite 
Run the command ```nvm use 5.0``` a single time when starting to work in a terminal session.
 
Then just run the command ```karma start --single-run``` to execute all tests. The _single-run_ parameter is optional, its already set in _karma.conf.js_. 

If you want to run the tests while writing the code, you can do a ```karma start --no-single-run```

> references:

> https://scotch.io/tutorials/testing-angularjs-with-jasmine-and-karma-part-1

## Wordpress Rest API Documentation

We support the 1.1 and 1.2 version of WordPress Rest API. Supported resources are:

* [Posts](https://developer.wordpress.com/docs/api/1.1/get/sites/%24site/posts/)
* [Site](https://developer.wordpress.com/docs/api/1.2/get/sites/%24site/)
