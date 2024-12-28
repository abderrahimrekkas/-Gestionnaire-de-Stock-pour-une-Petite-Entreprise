const express = require('express');
const route = express.Router();
const Task = require('../models/taskmodel'); 
const bodyParser = require('body-parser');
// Route bach tjib list dyal les tache
route.get('/task',async (req,res)=>{
    try{
        
        await Task.find({}).then(resultat=>{
            res.send(resultat) //  taRj3 liya list dyal les tache 
        })

    }catch(err){
        console.log(err) // yAfficher liya ereur ila kayn  chy mochkil
    }
   
})
