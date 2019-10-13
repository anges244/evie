Evie
====

Project site: https://evie.undraw.co

An MIT licensed template bundled with a minimal style guide to build websites faster, especially combined with illustrations from [unDraw](https://undraw.co). It is extemely lightweight, customizable and works perfectly on modern browsers.

![Evie Landing](https://github.com/anges244/evie/blob/master/docs/images/preview_landing.png)


Setup
-----

System dependencies are:

* npm (v6.0.0+)
* gulp (v4.0.0+)

To install them, e.g. on Debian use: `# apt-get install npm gulp`. Check your npm and gulp versions using `$ npm -v` and `$ gulp -v`, respectively. If your version is lower than the required versions listed above, install the up to date versions with `# npm install -g npm@latest gulp@latest`. Restart your shell for the changes to take effect.

Next, install the Javascript dependencies for Evie by running `$ npm install` in the Evie directory. Since Evie is a statically deployed website, security warnings from npm can be safely ignored.


Usage
-----

_This is still under development. For better instructions, head over to the [project website](https://evie.undraw.co)._

This version contains the development setup, with the source files (SASS,EJS) and a Gulp/Express.js setup. To use it, run `gulp`. This will start the server with live reloading. If you just want to compile a customized production version, the path is "src/theme/" and there you can change the SASS files, customize colors, make any change you want and run `gulp build`. This will generate a "Evie" folder which contains your static website.
