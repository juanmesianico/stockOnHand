const path = require('path');
const express = requiere('express');

const app = express();

app.use(express.static(__dirname + '/dist/frontend'));

app.get('*/', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/frontend/index.html'))
});

app.listen(process.env.PORT || 5000);