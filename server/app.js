const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();



app.get('/', function (req, res) {
    console.log('hi');
    res.send('hello world');
  
})

app.listen(4000,()=>{
    console.log('now listening for requests on port 4000');
});