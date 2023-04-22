const express=require('express');
const { asyncExec, createTemplate } = require('./utils');
const app=express();

// Define middleware here
app.use(express.json())


app.post('/create',async(req,res)=>{
    const {body:{stack,params}}=req;
    createTemplate(params);
    try {
        const result=await asyncExec('create',stack);
        res.send({result:JSON.parse(result)})
    } catch (error) {
        res.sendStatus(500).send({error})
    }
});

app.delete('/delete',async(req,res)=>{
    const {body:{stack}}=req;
    try {
        const result=await asyncExec('delete',stack);
        res.send({result:'succesfully deleted'})
    } catch (error) {
        res.sendStatus(500).send({error})
    }
});

app.listen('5000',console.log('ParamStore manager is running on port 5000'))