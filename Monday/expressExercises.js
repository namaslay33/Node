var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello World!');
});

app.use(require('./Routes/cats'));
app.use(require('./Routes/dogs'));
app.use(require('./Routes/cats_and_dogs'));


app.listen(8000, function(){
    console.log('Listening on port 8000');
});