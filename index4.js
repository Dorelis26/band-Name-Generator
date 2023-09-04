const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;

//use body-parser to get the client side data to the server
app.use(bodyParser.urlencoded({extended:true}));

//create your middleware to performe the name convination
// function bandNameGenerator(req,res,next){
//     console.log(req.body);
//     bandName = req.body['street'] + req.body['pet'];
//     next();
// };
//call the middleware function
// app.use(bandNameGenerator);

//return the html in the websitee
app.get('/',(req,res)=>{
  res.sendFile(`${__dirname}/public/index.html`);
});

//if the submit button is the request we return the below code
app.post("/submit",(req,res)=>{
  bandName = req.body['street'] + req.body['pet'];
  res.send(`<h1>Your Band Name Is :<h1><h2>${bandName}<h2>`)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
