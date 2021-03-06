var express = require('express');
var app = express();

app.use(express.static('assets'));

app.use('/store', function(req, res, next){
    console.log('Jestem pośrednikiem przy żądaniu do /store!');
    next();
});

app.get('/', function (req, res) {
    res.send('Hello world!');
});

app.get('/store', function (req, res) {
    console.log('To jest sklep!');
});


var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});