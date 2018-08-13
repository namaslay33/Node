var express = require('express');
var router = express.Router();

router.get('/cats', function(request, response){
    response.send("Meow");
})

module.exports = router;