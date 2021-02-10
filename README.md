# Yelp-Camp
YelpCamp is a simple web application built with express js and mongodb to see the campgrounds all over the world.
website for this project: https://guarded-sea-76679.herokuapp.com/

 ****Dummy credentials:***
	username: Recruiter@yelpCamp, 
	password: 12345*
	

## Project Tools-Used-In:

 - **Node.js**

 is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the Chrome V8 engine and executes JavaScript code outside a web browser.

 - **NPM**

It is a package manager for the JavaScript programming language. npm, Inc. is a subsidiary of GitHub, that provides hosting for software development and version control with the usage of Git. npm is the default package manager for the JavaScript runtime environment Node.js.

 - **Express.js**

 simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the factor standard server framework for Node.js.

 - **EJS**

 It is a simple templating language that lets you generate HTML markup with plain JavaScript.

 - **Mongoose**

 is an object data modeling (ODM) library that provides a rigorous modeling environment for your data, enforcing structure as needed while still maintaining the flexibility that makes MongoDB powerful.

 - **MongoDB**

It is a document-oriented database which stores data in JSON-like documents with dynamic schema. It means you can store your records without worrying about the data structure such as the number of fields or types of fields to store values.

 - **JOI**

 It is the most powerful schema description language and data validator for JavaScript.

 - **Passport**

It  is  [Express.js](http://expressjs.com/)-compatible authentication middleware for  [Node.js](http://nodejs.org/).
Passport's sole purpose is to authenticate requests, which it does through an extensible set of plugins known as  _strategies_. Passport does not mount routes or assume any particular database schema, which maximizes flexibility and allows application-level decisions to be made by the developer. The API is simple: you provide Passport a request to authenticate, and Passport provides hooks for controlling what occurs when authentication succeeds or fails.

*For making this Website I used the Express framework as Server side rendering  and also used EJS which is simple templating language, and some NPM packages from nodejs. And also used Mongoose library(ODM), to interact directly with MongoDB database which the website is less interactive but works effectively!.*

## Project  Architecture:

 1. **REpresentational State Transfer:**

REST is web standards based architecture and uses HTTP Protocol. It revolves around resource where every component is a resource and a resource is accessed by a common interface using HTTP standard methods.

A REST Server simply provides access to resources and REST client accesses and modifies the resources using HTTP protocol. Here each resource is identified by URIs/ global IDs. REST uses various representation to represent a resource like text, JSON, XML.

Following four HTTP methods are commonly used in REST based architecture.

-   **GET**  − This is used to provide a read only access to a resource.
    
-   **PUT**  − This is used to create a new resource.
    
-   **DELETE**  − This is used to remove a resource.
    
-   **POST**  − This is used to update a existing resource or create a new resource.

Web services based on REST Architecture are known as RESTful web services. These webservices uses HTTP methods to implement the concept of REST architecture. A RESTful web service usually defines a URI, Uniform Resource Identifier a service, which provides resource representation such as JSON and set of HTTP Methods.

 2. **Model-View-Controller(MVC) architecture:**

MVC is an acronym for Model-View-Controller.  It is a design pattern for software projects. It is used majorly by Node developers and by C#, Ruby, PHP framework users too.  In MVC pattern, application and its development are divided into three interconnected parts. The advantage of this is it helps in focusing on a specific part of the application name, the ways information is presented to and accepted from, the user. It helps in allowing for efficient code reuse and the parallel development of the application. Even if the project structure might look a little different than an ideal MVC structure, the basic program flow in and out the application remains the same.

 - **Model**:

Model represents the structure of data, the format and the constraints with which it is stored. It maintains the data of the application. Essentially, it is the database part of the application.

 - **View**:

 View is what is presented to the user. Views utilize the Model and present data in a form in which the user wants. A user can also be allowed to make changes to the data presented to the user. They consist of static and dynamic pages which are rendered or sent to the user when the user requests them.

 - **Controller**:

It  controls  the requests of the user and then generates appropriate response which is fed to the viewer. Typically, the user interacts with the View, which in turn generates the appropriate request, this request will be handled by a controller. The controller renders the appropriate view with the model data as a response.  
So, to sum it up:

-   Model is data part.
-   View is User Interface part.
-   Controller is request-response handler.

![mvc architecture](https://media.geeksforgeeks.org/wp-content/uploads/mvc-block-diagram.png)

						MVC architecture

## Project Features:

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

