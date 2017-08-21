# S3 browser upload 
Source reference:
https://github.com/leonid-shevtsov/s3-browser-upload-demo

## How to run

* Prerequisite: 
	* [Node.js](https://nodejs.org).
	* Get an AWS account, create an S3 bucket, generate a key pair.

Usage:
``` shell
env S3_ACCESS_KEY=xxx S3_SECRET_KEY=xxx S3_BUCKET=xxx S3_REGION=xxx node server.js
```

and finally open [http://localhost:5000](http://localhost:5000) in your browser.

Customization done to the code:
* Disabled Etag in Node.js server to avoid policy expration
* index.html:
	* Added JS code to read project directory from url
	* Passing directory to client.js
* Client.js:
	* Updated prefix to upload file into the project directory
	* Updated filetypes to allow all file types
	* remove restriction of filesize
*server.js:
	* Content length limit increased
	* expiration of policy changed to 1 year. 
