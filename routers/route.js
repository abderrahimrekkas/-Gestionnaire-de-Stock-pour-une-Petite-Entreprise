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
// Route bach tzid wahd la tache jdida
route.post('/Task',async (req,res)=>{
    try{
        const{name,description,statu}=req.body;
    let new_Task = new Task({
        name:req.body.name,
        description:req.body.description,
        status:req.body.status
    })
    await new_Task.save()// tsjal liya la tache jdida f la base de donnes
    res.send('ajoutter avec succes')
}catch(err){
    console.log(err)
}
})
// Route bach tmsah la tache b id
route.delete('/delet/:id',async(req,res) => {
    await   Task.findByIdAndDelete(req.params.id)
    res.send("supprimer  avec succes")
   })
