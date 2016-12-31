
## :zap: FrontPress
### A full front-end AngularJS template for WordPress API

[![Build Status](https://travis-ci.org/frontpressorg/frontpress.svg?branch=master)](https://travis-ci.org/frontpressorg/frontpress) [![Codacy Badge](https://api.codacy.com/project/badge/Coverage/da783fc5da8c4f0e98d6f0a18d01dc0b)](https://www.codacy.com/app/frontpress/frontpress?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=teles/frontpress&amp;utm_campaign=Badge_Coverage) [![Join the chat at https://gitter.im/teles/frontpress](https://badges.gitter.im/teles/frontpress.svg)](https://gitter.im/teles/frontpress?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![](https://api.codacy.com/project/badge/Grade/8da469f973d143189c352cdd852d23ca)](https://www.codacy.com/app/josetelesmaciel/frontpress?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=teles/frontpress&amp;utm_campaign=Badge_Grade) [![Github Issues](http://githubbadges.herokuapp.com/teles/frontpress/issues.svg)](https://github.com/teles/frontpress/issues) [![dependencies Status](https://david-dm.org/teles/frontpress/status.svg)](https://david-dm.org/teles/frontpress) [![devDependencies Status](https://david-dm.org/teles/frontpress/dev-status.svg)](https://david-dm.org/teles/frontpress?type=dev)

[![https://nodei.co/npm/frontpress.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/frontpress.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/frontpress)

--

## Getting Started


* Install it using npm: `npm install frontpress` 
* Import angular and frontpress to your project.

```html
<script type="text/javascript" src="/node_modules/angular/angular.min.js"></script>
<script type="text/javascript" src="/node_modules/frontpress/release/frontpress.min.js"></script>
```

* Add `frontpress` to your required modules list:

```javascript
angular.module('myBlog', ['frontpress']);
```

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
			"siteName": "FrontPress Default Template"
		}
	});
	
});

```

* [How can I discover my restApiUrl?](https://github.com/frontpressorg/frontpress/wiki)
* [How to use FrontPress for Wordpress api version 1?](https://github.com/frontpressorg/frontpress/wiki)
* [What configuration is required?](https://github.com/frontpressorg/frontpress/wiki)
* [All configuration options](https://github.com/frontpressorg/frontpress/wiki)
* [Readme for FrontPress core developers](https://github.com/frontpressorg/frontpress/wiki)



#### Wordpress Rest API

We support these versions of WordPress Rest API.

- [x] 1.1
- [x] 1.2
- [x] 2.0

#### License

MIT © [Teles](https://github.com/teles)
