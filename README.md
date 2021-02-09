# Yelp-Camp
YelpCamp is a simple web application built with express js and mongodb to see the campgrounds all over the world.
website for this project: https://guarded-sea-76679.herokuapp.com/

 ***Dummy credentials:***
username: Recruiter@yelpCamp, 
password: 12345


## Tools-Used-In:

**Node.js** is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the Chrome V8 engine and executes JavaScript code outside a web browser.

**NPM** is a package manager for the JavaScript programming language. npm, Inc. is a subsidiary of GitHub, that provides hosting for software development and version control with the usage of Git. npm is the default package manager for the JavaScript runtime environment Node.js.

**Express.js,** or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the factor standard server framework for Node.js.

**EJS** is a simple templating language that lets you generate HTML markup with plain JavaScript.

**Mongoose** is an object data modeling (ODM) library that provides a rigorous modeling environment for your data, enforcing structure as needed while still maintaining the flexibility that makes MongoDB powerful.

**MongoDB** is a document-oriented database which stores data in JSON-like documents with dynamic schema. It means you can store your records without worrying about the data structure such as the number of fields or types of fields to store values.

**JOI** is the most powerful schema description language and data validator for JavaScript.

**Passport** is  [Express.js](http://expressjs.com/)-compatible authentication middleware for  [Node.js](http://nodejs.org/).
Passport's sole purpose is to authenticate requests, which it does through an extensible set of plugins known as  _strategies_. Passport does not mount routes or assume any particular database schema, which maximizes flexibility and allows application-level decisions to be made by the developer. The API is simple: you provide Passport a request to authenticate, and Passport provides hooks for controlling what occurs when authentication succeeds or fails.

*For making this Website I used the Express framework as Server side rendering  and also used EJS which is simple templating language, and some NPM packages from nodejs. And also used Mongoose library(ODM), to interact directly with MongoDB database which the website is less interactive but works effectively!.*

## Features:

 - **Authentication**: 
User login with username and password.

 - **Authorization**
One cannot manage posts and view user profile without being authenticated.
One cannot edit or delete posts and comments created by other users.

- **Manage campground posts with basic functionalities:**

	Create, edit and delete posts and comments.

	Upload campground photos.

	Display campground location on MpaBox.

	Search existing campgrounds.

	Manage user account with basic functionalities.

	Flash messages responding to users' interaction with the app.

	Responsive web design.

	Update campground photos when editing campgrounds.

	Update personal information on profile page (ongoing!).


## Dependencies used for this Project:

	mapbox/mapbox-sdk: "0.11.0",

	cloudinary: "1.23.0",

	connect-flash: "0.1.1",

	connect-mongo: "3.2.0",

	dotenv: "8.2.0",

	ejs: "3.1.5",

	ejs-mate: "3.0.0",

	express: "4.17.1",

	express-mongo-sanitize: "2.0.1",

	express-session: "1.17.1",

	gitignore: "0.6.0",

	helmet: "4.3.1",

	joi: "17.3.0",

	method-override: "^3.0.0",

	mongoose: "5.11.9",

	multer: "1.4.2",

	multer-storage-cloudinary: "4.0.0",

	nodemon: "2.0.6",

	npm: "7.3.0",

	passport: "0.4.1",

	passport-local": "1.0.0",

	passport-local-mongoose: "6.0.1",

	sanitize-html: "2.3.0"

