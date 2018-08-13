var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello World!');
});

app.use(require('./Routes/cats'));
app.use(require('./Routes/dogs'));
app.use(require('./Routes/cats_and_dogs'));

app.get('/greet/:name', function(request, response){
    var name = request.params.name;

    response.send("Hello " + name);
});

app.get('/year', function(req, res){
    var year = req.query.year;

    res.send("You were born in " + year + ".")
})


app.listen(8000, function(){
    console.log('Listening on port 8000');
});

