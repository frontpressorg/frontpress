# Frontpress

> Oh! It's not another WordPress theme! It's a full website using WordPress API! I can't believe, sweet lord!! :raised_hands:

[![Join the chat at https://gitter.im/teles/frontpress](https://badges.gitter.im/teles/frontpress.svg)](https://gitter.im/teles/frontpress?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8da469f973d143189c352cdd852d23ca)](https://www.codacy.com/app/josetelesmaciel/frontpress?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=teles/frontpress&amp;utm_campaign=Badge_Grade)

[Github project to grade A on codacy](https://github.com/teles/frontpress/projects/2)

Full front-end AngularJS template for WordPress API. 

## 1. Clone, install and run

1. Clone or fork this repository
2. ```npm i && bower i```
3. ``` gulp ```
4. Take a look on [http://localhost:4000/](http://localhost:4000/)

## :warning: 2. Configure

The first time you run the app, you'll need to create a ``frontpress.json`` configuration file. 
Open the project's directory and run the following command:

````bash
gulp init
````
![](https://s22.postimg.io/y99g4teap/frontpress.jpg)


**OR** you can copy this repository file ``frontpress.json.sample`` and rename it to ``frontpress.json``.

You may find more [information about frontpress.json on this wiki page](https://github.com/teles/frontpress/wiki/frontpress.json).


## Wordpress Rest API Documentation

We support the 1.1 and 1.2 version of WordPress Rest API. Supported resources are:

* [Posts](https://developer.wordpress.com/docs/api/1.1/get/sites/%24site/posts/)
* [Site](https://developer.wordpress.com/docs/api/1.2/get/sites/%24site/)
