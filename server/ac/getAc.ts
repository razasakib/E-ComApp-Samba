import * as express from "express";

import * as mongodb from "mongodb";

//create the client
let ac_client=mongodb.MongoClient;

//create ac module
let ac_module=express.Router().get("/",(req,res)=>{
    ac_client.connect("mongodb+srv://saukatalli:<password>@cluster0.sh2w1.mongodb.net/ecom_db_cloud?retryWrites=true&w=majority",(err,client)=>{
        if(err) throw err;
        else{
            let db=client.db("ecom_db_cloud");
            db.collection("ac_collection").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    })
});

export default ac_module;