const express = require("express");

const app = express();

app.use(express.json()); // middleware funct -> whenever post req is made use it to convert fromtend data to jason format
app.listen(3000);

let users = {};

// HTTP Methods:

// GET : simply rquesting a response from the server
app.get("/users", (req, res) => {
  res.send(users);
});

// POST : sending datat from frontend to backend
app.post("/users", (req, res) => {
  res.send(req.body); // data from frontend to backend is send i req.body
  // data is written in postman (POST request inside BODY tab json format)
  // we could have also used res.json({user : req.body});

  users = req.body; // now if we make get request after making post request in browser then we will not get empty users obj instead we will get the data in users which we have sent in post request
});

// PATCH : to updata data in backend from frontend
app.patch("/users", (req, res) => {
  console.log(req.body); // we will write updated info in req.body in path req in postman
  // update data in users object
  let UpdatedData = req.body;
  for (key in UpdatedData) {
    users[key] = UpdatedData[key];
  }
  // now after making patch request make a get request to know the changes updated
  res.send("info updates sucessfully");
});

//DELETE : to delete
app.delete("/users", (req, res) => {
  users = {};
  res.send("info deleted successfully");
});
