# uinexpress
Enables underscore templates in express versions 2 and 3.
# Usage
in your express app.js, for express 3:
```
app.configure(function () {
	app.engine('html', require('uinexpress).__express)
	app.set('view engine', 'html')
```
in your express app.js, for express 2:
```
app.configure(function () {
	app.register('.html', require('uinexpress))
	app.engine('html', require('uinexpress)
```
# Notes
* An alternative is to use ejs in the browser, see the module ejsinbrowser
