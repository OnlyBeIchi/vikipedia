import express from 'express';
import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://Vikipedia:Nam24082002@vikipedia.xga42v3.mongodb.net/Vikipedia?retryWrites=true&w=majority").then(() =>{
    console.log("Connected to Vikipedia");
})
.catch((err) =>{
    console.log(err);
});

const app = express();

app.listen(3000, () => {
    console.log('listening on');
})