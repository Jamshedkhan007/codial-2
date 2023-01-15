const express=require('express');
const app=express();
const port=8000;




// Set the view Engine
app.set('view engine','ejs');
app.set("views",'./views');


// Running the server
app.listen(port,function(err){

    if(err){
        console.log('Error to connect with Server',err);
    }
    console.log(`Connection Successfully ${port}`);
})