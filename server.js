const express = require('express');
const app = express();


app.get('/', function(req, res){
    res.send('meow')
})

app.listen(8080, console.log('Listening on 8080!'))