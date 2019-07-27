// import module
var express= require("express");
var mongodb = require('mongodb');
var MongoClient= require("mongodb").MongoClient;
var bodyparser= require("body-parser");

// data connection url
var url="mongodb://127.0.0.1:27017";

//Configure Middleware
var app=express();
app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(bodyparser.json());

//get data
app.get("/api/getperson", function (req, res){
    MongoClient.connect(url, function (err , db){
        if(!err)
        {
            var dbo=db.db("personinfo");
            dbo.collection("persondata").find({}).toArray(function (err,result){
                if(!err){
                    res.send(result);
                }
                else{
                    res.send(err);
                }
            })
        }
    })
})

//post data
app.post("/api/postperson", function (req, res){
    var data={
        Name:req.body.Name,
        Age:req.body.Age,
        Gender:req.body.Gender,
        Mobileno:req.body.Mobileno
    };
    MongoClient.connect(url, function(err,db){
        var dbo=db.db("personinfo");
        dbo.collection("persondata").insertOne(data, function(err,result)
        {
            if(!err){
                res.send({"message":"Record inserted..."});
                console.log("Record Inserted");
            }
            else{
                res.end(err);
            }
        })
    })
})

//update data
app.put("/api/putperson", function(req,res){
    //console.log(req.body, req.params, req.query);
    var data={
        Name:req.body.Name,
        Age:req.body.Age,
        Gender:req.body.Gender,
        Mobileno:req.body.Mobileno,
    };

     MongoClient.connect(url,function (err,db)
    {
        var dbo=db.db("personinfo");

        var oldvalues = {_id:new mongodb.ObjectID(req.body._id)};

        var newvalues={$set:data};

        dbo.collection("persondata").updateOne(oldvalues,newvalues, function (err, result)
        {
            if(!err)
            {
                res.send(result);
                console.log("Record Updated..",result);
            }
            else{
                res.send(err);
            }
        })
    })
})

//delete person
app.delete("/api/deleteperson", function (req,res){

    MongoClient.connect(url, { useNewUrlParser: true }, function (err,db){
        var dbo=db.db("personinfo");
        dbo.collection("persondata").deleteOne({_id: new mongodb.ObjectID(req.query.id)}, function (err, result){
            if(!err)
            {
                res.send({ "message" : "record deleted..." });
                console.log("record deleted  ...", req.query.id);
            }
            else{
                res.send(err);
            }
            db.close();
        })
    })
})
app.listen(8080);
console.log("server started...");