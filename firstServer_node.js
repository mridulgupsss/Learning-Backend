// server create using node js

// http module

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("req has been made from browser to server"); // this call back function will execute when the request will be made from browser to server

  // requests
  // console.log(req.url);
  // console.log(req.method);

  // responses
  // res.setHeader('Content-type' , 'text/plain');
  // res.write('This is header');
  // res.end();
  let path = "./SampleFiles";
//   console.log(req.url);
  switch (req.url) {
    case "/":
      path += "/Main.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "/about.html";
      res.statusCode = 200;
      break;
    default:
      res.statusCode = 404;
      path += "/404Page.html";
  }
  res.setHeader("Content-type", "text/html");
  fs.readFile(path, (err, fileData) => {
    if (err) {
      console.log(err);
    } else {
      res.write(fileData); // write method can be used multiple times also
      res.end();
    }
  });
});

// listen method takes 3 arguments: port Number, host, callback func
server.listen(3000, "localhost", () => {
  console.log("Server is listening ");
});
