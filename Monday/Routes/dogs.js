var express = require('express');
var router = express.Router();

router.get('/dogs', function(request, response){
    response.send('woof');
})

module.exports = router;