# `angular Js Test project`

This project is an application skeleton for a typical [AngularJS] web app. You can use it
to quickly bootstrap your angular webapp projects and dev environment for these projects.

Purpose of the project to compile HAML, SCSS and Coffee files


* We get the tools we depend upon and the AngularJS code via `npm`, the [Node package manager][npm]

```
npm install
```

Behind the scenes this will also call `npm run copy-libs`, which copies the AngularJS files and
other front end dependencies. After that, you should find out that you have two new directories in
your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/dist/lib` - contains the AngularJS framework files and other front end dependencies

*Note copying the AngularJS files from `node_modules` to `app/dist/lib` makes it easier to serve the
files by a web server.*

### Compile HAML, Coffee and scss 
```
gulp
```
Above command will compile the templates and generate new templates under the `app/dist/`directory
### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].


## Directory Layout

```
app/                  --> all of the source files for the application
  app.css               --> default stylesheet
  view1/                --> the view1 view template and logic
    view1.html            --> the partial template
    view1.js              --> the controller logic
  view2/                --> the view2 view template and logic
    view2.html            --> the partial template
    view2.js              --> the controller logic
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
package.json          --> Node.js specific metadata, including development tools dependencies
package-lock.json     --> Npm specific metadata, including versions of installed development tools dependencies
```



```
use gulp command to compile the coffeescript, haml and scss files
gulp

```

```
npm start
```


## Loading AngularJS Asynchronously

The `angular-seed` project supports loading the framework and application scripts asynchronously.
The special `index-async.html` is designed to support this style of loading. For it to work you must
inject a piece of AngularJS JavaScript into the HTML page. The project has a predefined script to help
do this:

```
npm run update-index-async
```

This will copy the contents of the `angular-loader.js` library file into the `index-async.html`
page. You can run this every time you update the version of AngularJS that you are using.


## Serving the Application Files

While AngularJS is client-side-only technology and it is possible to create AngularJS web apps that
do not require a backend server at all, we recommend serving the project files using a local
web server during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, XHR,
etc to function properly when an HTML page is opened via the `file://` scheme instead of `http://`.

### Running the App during Development

The `angular-seed` project comes preconfigured with a local development web server. It is a Node.js
tool called [http-server][http-server]. You can start this web server with `npm start`, but you may
choose to install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from any folder by running:

```
http-server -a localhost -p 8000
```

