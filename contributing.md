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
- [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#1-install-gulp-globally)

```bash
# Clone or fork this repository. 
# If you wanna clone, run:
$ git clone git@github.com:frontpressorg/frontpress.git

# Install the dependencies
$ npm i
```

##### First time running the app:

Just run the command below and we'll create a configuration file called `frontpress.json`.

You may find more [information about `frontpress.json` here](https://github.com/teles/frontpress/wiki/frontpress.json).

```bash
$ npm run dev
```

Run this to use the watch code modifications and rebuild:

```bash
$ npm run watch
```

Wait a few, and it will open a [new tab on your browser](http://localhost:4000).

#### Goals

- [ ] [Grade A on codacy](https://github.com/frontpressorg/frontpress/projects/2)


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
