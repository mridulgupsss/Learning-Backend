const express = require("express"); 

const app = express();


app.use(express.json()); // middleware funct -> whenever post req is made use it to convert fromtend data to jason format
app.listen(3000); 


let users ={};

// Router
const userRouter = express.Router(); 
app.use("/user", userRouter); // "/user" is a base route, and userRouter is a router to use to connect further routes  

userRouter
 .route("/")
 .get(getUser)
 .post(postUser)
 .patch(patchUser)
 .delete(deleteUser);  // startsing from top to bottom whatever request it would be that function would be called; 

userRouter
 .route("/:id")
 .get(getUserByID); 



  // GET
  function getUser(req, res){
    res.send(users);
    console.log("get///");
  }

  // POST
  function postUser(req, res){
    res.send(req.body); // data from frontend to backend is send i req.body
    // data is written in postman (POST request inside BODY tab json format)
    // we could have also used res.json({user : req.body});
  console.log("abc");
    users = req.body; // now if we make get request after making post request in browser then we will not get empty users obj instead we will get the data in users which we have sent in post request
  
  }

  // PATCH
  function patchUser(req, res){
    console.log(req.body); // we will write updated info in req.body in path req in postman
    // update data in users object
    let UpdatedData = req.body;
    for (key in UpdatedData) {
      users[key] = UpdatedData[key];
    }
    // now after making patch request make a get request to know the changes updated
    res.send("info updates sucessfully");
  }


  // DELETE
  function deleteUser(req, res){
    users = {};
    res.send("info deleted successfully");     
}

// params 
function getUserByID(req, res){
    console.log(req.params);
    console.log(req.params.id);  // this will be the id we would have passed in URL 
    res.send("params run successfully");
}
