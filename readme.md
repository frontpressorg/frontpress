![frontpress-logo-horizontal](https://cloud.githubusercontent.com/assets/762639/21735541/ca6f11ce-d451-11e6-88ae-291b3f82c931.png)

### A full front-end AngularJS template for WordPress Rest API.
-

[![Build Status](https://travis-ci.org/frontpressorg/frontpress.svg?branch=master)](https://travis-ci.org/frontpressorg/frontpress) [![Codacy Badge](https://api.codacy.com/project/badge/Coverage/da783fc5da8c4f0e98d6f0a18d01dc0b)](https://www.codacy.com/app/frontpress/frontpress?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=teles/frontpress&amp;utm_campaign=Badge_Coverage) [![Join the chat at https://gitter.im/teles/frontpress](https://badges.gitter.im/teles/frontpress.svg)](https://gitter.im/teles/frontpress?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![](https://api.codacy.com/project/badge/Grade/8da469f973d143189c352cdd852d23ca)](https://www.codacy.com/app/josetelesmaciel/frontpress?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=teles/frontpress&amp;utm_campaign=Badge_Grade) [![Github Issues](http://githubbadges.herokuapp.com/teles/frontpress/issues.svg)](https://github.com/teles/frontpress/issues) [![dependencies Status](https://david-dm.org/teles/frontpress/status.svg)](https://david-dm.org/teles/frontpress) [![devDependencies Status](https://david-dm.org/teles/frontpress/dev-status.svg)](https://david-dm.org/teles/frontpress?type=dev)

[![https://nodei.co/npm/frontpress.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/frontpress.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/frontpress)


## Install FrontPress using NPM: 

```shell 
npm install frontpress --save
``` 

AngularJS is the only FrontPress dependency you will need to import.

```html
<script type="text/javascript" src="/path/to/angular.min.js"></script>
<script type="text/javascript" src="/path/to/frontpress/release/frontpress.min.js"></script>
```

*You may install FrontPress using [bower](https://github.com/frontpressorg/frontpress/wiki/Installation#bower-package) or import it directly from cdn using [cdnjs](https://github.com/frontpressorg/frontpress/wiki/Installation#cdn-js)*.

## Usage

* Add `frontpress` to your required modules list:

```javascript
angular.module('myBlog', ['frontpress']);
```

## Make your index.html

Your minimal index.html can be just like that.

```html
<!DOCTYPE html>
<html ng-app="myBlog">
   <!-- include FrontPress page-head attribute directive if you want-->
   <head page-head>
       <script type="text/javascript" src="/path/to/angular.min.js"></script>
       <script type="text/javascript" src="/path/to/frontpress/release/frontpress.min.js"></script>   
       <script type="text/javascript" src="/path/to/my/blog/javascript.js"></script>
   </head>
   <body>
       <!-- ui-view directive is required -->
       <ui-view></ui-view>
   </body>
</html>
```

## Configure your javascript

* Configure your module using `$FrontPressProvider`  !

```javascript
angular.module('myBlog').config(function($FrontPressProvider){

	$FrontPressProvider.configure.load({
		"restApiUrl": "https://demo.wp-api.org/wp-json",
		"apiVersion": "v2",
		"pageSize": 5,
		"infiniteScroll": true,
		"routes": {
			"post": "/:postYear/:postMonth/:postDay/:postSlug",
			"home.pagination": "/page/:pageNumber"
		},
		"titles": {
			"post": ":postTitle - :siteName",
			"home": "Home - :siteName"
		},
		"overrides": {
			"siteName": "My Awesome SPA Blog"
		}
	});
	
});

```

**It's done!**

**Disclaimer: By default as any SPA FrontPress homepage will run on a /#!/ route!** 

## Further relevant informations

* [How can I discover my restApiUrl?](https://github.com/frontpressorg/frontpress/wiki)
* [How to use FrontPress for Wordpress api version 1?](https://github.com/frontpressorg/frontpress/wiki)
* [What configuration is required?](https://github.com/frontpressorg/frontpress/wiki)
* [All configuration options](https://github.com/frontpressorg/frontpress/wiki)
* [What is a SPA and why you should care about it?](https://github.com/frontpressorg/frontpress/wiki)
* [Readme for FrontPress core developers](https://github.com/frontpressorg/frontpress/wiki)

## License

MIT © [Teles](https://github.com/teles)
