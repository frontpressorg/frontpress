<div align="center">
    <img src="https://github.com/alisonmonteiro/frontpress/blob/master/media/logo-angular.png" height="75">
    <img src="https://github.com/alisonmonteiro/frontpress/blob/master/media/logo-wordpress.png" height="75">
    <h3 align="center">FrontPress</h3>
    <p align="center">A full front-end AngularJS template for WordPress API.<p>

    <p align="center">
        <a href="https://gitter.im/teles/frontpress?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge">
            <img src="https://badges.gitter.im/teles/frontpress.svg" alt="Join the chat at https://gitter.im/teles/frontpress">
        </a>
        <a href="https://www.codacy.com/app/josetelesmaciel/frontpress?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=teles/frontpress&amp;utm_campaign=Badge_Grade">
            <img src="https://api.codacy.com/project/badge/Grade/8da469f973d143189c352cdd852d23ca" alt="Codacy Badge">
        </a>
    </p>
</div>

--
> It's not another WordPress theme! It's a full website using WordPress API! I can't believe, sweet lord!! :raised_hands:

### Table of contents
- [Download, install and config](#download-install-and-config)
- [Goals](#goals)
- [Tests](#tests)
- [WordPress Rest API](#wordpress-rest-api)
- [License](#license)

#### Download, install and config

First of all, make sure you have installed the main dependencies:

- [Git](https://git-scm.com/downloads)
- [NodeJS](https://nodejs.org/en/download/)
- [Bower](https://bower.io/#install-bower)
- [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#1-install-gulp-globally)

```bash
# Clone or fork this repository. 
# If you wanna clone, run:
$ git clone git@github.com:teles/frontpress.git

# Install the dependencies
$ npm i && bower i
```

##### First time running the app:

Just run the command below and we'll create a configuration file called `frontpress.json`.

You may find more [information about `frontpress.json` here](https://github.com/teles/frontpress/wiki/frontpress.json).

```bash
$ gulp init
```

Run this to use the Angular Template Cache:

```bash
$ gulp templateCache
```

##### If you already have a configuration file: :tada:

If your `fronpress.json` file is already configured, just **run the app**:

```bash
$ gulp
```

Wait a few, and it will open a new tab on your browser.

#### Goals

- [ ] [Grade A on codacy](https://github.com/teles/frontpress/projects/2)


#### Tests

##### Initial configurations

- If your NodeJS version is < 5.0, then [install NVM - Node Version Manager](https://github.com/creationix/nvm/blob/master/README.markdown#installation).
- Then install a 5.0+ version of NodeJS:

```bash
# Install a NodeJS version 5.0+ using nvm.
$ nvm install 5.0

# Using the installed version
$ nvm use 5.0
```

- Then, run the command below to execute all the tests.

```bash
$ karma start
```

- To run the tests while writing the code, just add the flag `--no-single-run`.

#### Wordpress Rest API

We support these versions of WordPress Rest API.

- [x] 1.1
- [x] 1.2
- [x] 2.0

#### License

MIT © [Teles](https://github.com/teles)
