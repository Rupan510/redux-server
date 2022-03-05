//import the modules
// "require()" is a predefined function use to import  the modules

const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors"); 

//create the rest Object
//rest object used to develop "rest" services


//where app is the rest object
//app object use to develop the rest services

const app = express()


//enable the cors policy
app.use(cors()); 


//set the JSON as MIME type
// MIME = MIME is the communication language between clint and server

app.use(express.json());



//create the clint object

const Rupan = mongodb.MongoClient;
// where "Rupan"is the clint object
//by using "Rupan" only we can connect to the database


//create the get requiest

app.get("/products", (req, res)=> {
    Rupan.connect("mongodb+srv://admin:admin@cluster0.y43w3.mongodb.net/redux-middleware?retryWrites=true&w=majority",(err, connection)=>{
        
        if(err) throw err;

        else{
            const db = connection.db("redux-middleware");
            db.collection("products").find().toArray((err, array)=>{

                if(err) throw err;

                else{
                    res.send(array);                }
            })
            
        }
    })
})

//assign the port number to your application

app.listen(8080,()=>{
    console.log("server listening port no :- 8080");
});



















