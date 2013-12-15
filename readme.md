# uinexpress
Enables underscore templates in express versions 2 and 3.

# Installation

Either *mannually* install **uinexpress** using npm: 
`npm install uinexpress`
***or***
Add **uinexpress** to your **package.json** file then `npm install` 

# Usage
in your express app.js, for express 3:
```
app.configure(function () {
	app.engine('html', require('uinexpress').__express)
	app.set('view engine', 'html')
```
in your express app.js, for express 2:
```
app.configure(function () {
	app.register('html', require('uinexpress'))
	app.set('view engine', 'html')
```
## Example App

Getting started by trying the sample application: /**example**

```sh
git clone https://github.com/haraldrudell/uinexpress.git
cd example
npm install # install dependencies
node app.js # run the app       
```
Visit: http://localhost:8000/

Play around with adding your own variables in object passed 
to res.render (add them to views/index.html template)

### How it Works

By default uinexpress will look for a **layout** template. 
**layout.html** is just a simple html file with a two variables:
`<%= title %>` allows you to specify a title for the page
and `<%= body %>` will display the template you speficied as
the first argument to the res.render method (in the case of our
example app we want 'index' so uinexpress looks up **index.html** and shows
that file's contents in the **body** of the layout.html file)


# Notes
* An alternative is to use ejs in the browser, see the module [ejsinbrowser](https://github.com/haraldrudell/ejsinbrowser)

