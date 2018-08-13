var express = require('express');
var router = express.Router();

router.get('/cats_and_dogs', function(request, response){
    response.send('Living together');
})

module.exports = router;

