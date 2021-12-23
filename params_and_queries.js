const express = require("express"); 

const app = express(); 

app.listen(3000);
let users =[
    {
        id: 1,
        username: "superman"
    },
    {
        id: 2,
        username: "spiderman"
    },
    {
        id: 3,
        username: "ironman"
    }
];

// params :  starts with ':' 

// example URL : localhost: 3000/user/:23
app.get('/user/:id', (req,res)=>{
    console.log(req.params);
    console.log(req.params.id);  // this will be the id we would have passed in URL 
    res.send("params run successfully");
  
})



// queries : starts with '?'

  // examplw URL : localhost: 3000/user/?name=mridul&age=20
  app.get('/user', (req, res)=>{
        console.log(req.query);
        res.send("query");
  })


