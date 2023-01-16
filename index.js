const express=require('express');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');

// using the express layouts
app.use(expressLayouts);

// Using assests or static file
app.use(express.static('./assests'));

// extract style and script from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
// using express Router
app.use('/',require('./routes'))

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