app.listen(process.env.PORT || 5000);
const express = require ('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/angular-tour-of-heroes'));



//PathLocationStrategy

app.get('/*', function( req,res) {
    res.sendFile(path.join(__dirname + '/dist/angular-tour-of-heroes/index.html'));
})

console.log('Console listenig!');