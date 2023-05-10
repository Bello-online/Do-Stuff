const express = require("express");  // Requiring the express module
const bodyParser = require("body-parser"); //Requiring Body Parser
const date = require(__dirname + "/date.js"); // requiring a module located at the location of the date.js 


const app = express();

const items = []; // Aytime we create a new post request the item is added into this array
let WorkItems = []; // Anytime we send a post request on the work route, the item is added to the post array

app.use(bodyParser.urlencoded({extended: true}));  

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/",function(req,res){
   
let day = date.getDate();
    res.render("list", {listTitle : day, newItems : items});  // This renders the response from the list.ejs replacing the variables for day
});

app.post("/", function(req,res){

    let item = req.body.item;

    if (req.body.list === "Work"){    //Seperating the work lists from 
        WorkItems.push(item);
        res.redirect("/work")
    } else{
        items.push(item)
        res.redirect("/")  // This redirects you back to the home route where you can render back the item.
    }
 
})

app.get("/work",function(req,res){   // Setting up the route for the work to-do list
    res.render("list", {listTitle : "Work List", newItems : WorkItems })
})

app.post("/work",function(req,res){
    let item = req.body.item;
    WorkItems.push(item);
    res.redirect("/work");
})

app.get("/about",function(req,res){
    res.render("about")
})

// Listening on port 3000 of the local server
app.listen(3000, function(){
	console.log("Server started on port 3000");

});