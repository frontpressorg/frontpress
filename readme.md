# Frontpress

[![Join the chat at https://gitter.im/teles/frontpress](https://badges.gitter.im/teles/frontpress.svg)](https://gitter.im/teles/frontpress?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Full front-end AngularJS template for WordPress API. 

> Oh! It's not another WordPress theme! It's a full website using WordPress API! I can't believe, sweet lord!! :raised_hands:

## 1. Clone, install and run

1. Clone or fork this repository
2. ```npm i && bower i```
3. ``` gulp ```
4. Take a look on [http://localhost:4000/](http://localhost:4000/)

## :warning: 2. Provide a frontpress.json configuration file

Create a file on your projects root folder named ``frontpress.json`` to configure your own project.

**OR** you can copy this repository file ``frontpress.json.sample`` and rename it to ``frontpress.json``.


## Configuration file ``frontpress.json``

There are a few options you can configure on your ``frontpress.json`` file.

| Property name   	| What it is?                                                            	| Sample value                                                           	| Is required? 	|
|-----------------	|------------------------------------------------------------------------	|------------------------------------------------------------------------	|--------------	|
| restApiUrl      	| The root of your wordpress rest endpoint url.                          	| https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com 	| true         	|
| pageSize        	| How many posts by page.                                                	| 5                                                                      	| false        	|
| disqusShortname 	| Your disqus shortname                                                  	| frontpress                                                             	| false        	|
| overrides       	| An object with propeties to override default values from endpoint api. 	| Take a look the table bellow                                           	| false        	|


### Overrides

Overrides are part of frontpress.json file and it is object with propeties to override default values from endpoint api. For instance, even if your blog's titlé is 'My blog Title', here you can override this value.

| Override property | What is it?                      | Sample value.                                                                   |
|-------------------|----------------------------------|---------------------------------------------------------------------------------|
| title             | Blog title, homepage title tag | "Frontpress - This title is overwritten by frontpress.json configuration file." |

**None** of overrides values are required.

**Sample** ``frontpress.json``` file:

````javascript
{
  "restApiUrl": "https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com",
  "pageSize": "5",
  "disqusShortname": "frontpress",
  "overrides": {
    "title": "Frontpress - This title is overwritten by frontpress.json configuration file."
  }
}
````


## API Documentation

We support the 1.1 and 1.2 version of WordPress Rest API. Supported resources are:

* [Posts](https://developer.wordpress.com/docs/api/1.1/get/sites/%24site/posts/)
* [Site](https://developer.wordpress.com/docs/api/1.2/get/sites/%24site/)
