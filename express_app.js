const express = require("express"); // returns the function

const app = express(); // invoking the function, now 'app' is an instance

app.listen(3000); // by default on localhost

/*
app.get('/', (req,res)=>{
    res.send('hello world'); // it will understand by its own where we have sent a plane text or html file unlike node.js
    // also some of the status codes it will identify by its own unlike node.js
});
*/

// routes : whatever route matches with the request it will get execute
app.get("/", (req, res) => {
  res.sendFile("./SampleFiles/Main.html", { root: __dirname }); // as we are using relative path so here we have to use {root: __dirname}... or send absolute path;
});
app.get("/about", (req, res) => {
  res.sendFile("./SampleFiles/about.html", { root: __dirname });
});

// rdirects :  resirecting /about-s to /about
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// Handling 404 Page im express
app.use((req, res) => {
  // its kind of middleware func
  res.status(404).sendFile("./SampleFiles/404Page.html", { root: __dirname }); // 1. setting status code to 404
  // 2.here in express we use 'use' method to handle 404 pages .
  // 3. if no route is found above then this use method will execute, so it should be placed at last of all the routes request
});
