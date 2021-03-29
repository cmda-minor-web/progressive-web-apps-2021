##### Progressive Web App

# Ghibli Studio

## Project
In this course I will convert the client side web application previously made Web App From Scratch into a server side rendered application. I also add functionalities based on the Service Worker and turn the application into a Progressive Web App. Ultimately I'm going to implement a series of optimisations to improve the performance of the application. All the basic parts covered in this course are very useful to know when you later choose to make an app using a framework. All these parts are (almost) all automated in a framework and are therefore done for you. So it is helpful to know exactly how those parts work.

### Things I completed
1. Copy the WAFS application
2. Check code and delete unnecessary features
3. Install npm, Node.js and Express
4. Change code to Node.js and Express
5. Upload project on Heroku

## Screenshot

![Frontend ](https://github.com/NielsPeeters96/NielsPeeters_Web_App_From_Scratch/blob/main/img/Screenshot.png)

#### Features
- By clicking on movies or people you'll see all movies and people related to Ghibli Studios
- after that you can click on a movie or person
- it will show a detailpage with information about the movie or person

### [Live version](https://pwa-niels.herokuapp.com/)

## Techniques
This app is built, using:
- [npm](https://www.npmjs.com/)
- [Node.js server](https://nodejs.org/)
- [Express router](https://expressjs.com/)
- [EJS Templating engine](https://ejs.co/)
- [Heroku deployment](https://www.heroku.com/nodejs)

## Installation
1. Clone the repository:  
```
git clone https://github.com/ralfz123/progressive-web-apps-2021.git
```

2. Install dependencies   
```
npm install
```

3. To run the app   
```
npm run start
```

4. To run the app in developer mode (with nodemon)
```
npm run dev
```
5. Go to [localhost](http://localhost:5000/) in the browser and voilà :sparkles:
```
http://localhost:5000/
```

#### Server 
For running the server i use the Express framework for Node.js. This is a web framework for Node.js which is good for setting up a server.

1. Require Express
```
const express = require("express");
```

After that you init your app
```
const app = express();
```

Config your Express-app
```js
app.use(express.static('static')); // Declare your static folder

// Declare folders in the static folder for easy use
app.use('/styles', express.static(__dirname + 'static/styles'));
app.use('/scripts', express.static(__dirname + 'static/scripts'));
app.use('/icons', express.static(__dirname + 'static/icons'));

// Run the server on a port
app.listen(5000, () => console.log(`App is running on port 5000`));
```

#### Templating engine
For the templating engine I use EJS. I never worked with EJS so it's all new to me.

### Performance

![image](https://user-images.githubusercontent.com/78353674/112648034-639e2f00-8e49-11eb-912b-0a0e9f8ebd8e.png)

Next time it is important to first view the performance of the website and only then implement improvements. Then you can compare these two and see exactly how much it makes a difference. The website now works very well and I only minified the css, also because I don't use client side javascript.

![image](https://user-images.githubusercontent.com/78353674/112664677-82f18800-8e5a-11eb-96c7-6432f73ca9a4.png)

Within my run time performancer panel you can see that all boxes are green, which means that it is user-friendly and the user can get started optimally. 
The performance can only decrease because all pages are cached. This slows down the user's device. You can prevent this by adding another function in your service worker, but I didn't know how to do this myself.

Perceived performance is a measure of how fast a user thinks your website is, not necessarily how fast your technical stats say it is.

![image](https://user-images.githubusercontent.com/78353674/112665971-f051e880-8e5b-11eb-8367-b7d1eb3a7400.png)

I tested my webpage via the website webpage test and it came out that I score high on first view, repeat view and time to first byte, only things can be a lot better in the field of images. This causes my performance to slow down the most

### Cache
I chose to cache all pages. This so that the page also works offline and when the person no longer has internet access can also see which movie he liked and which person plays in it.
