var express = require('express');
var app = express();
// Insert some simple routes here:
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.sendFile('index.html');
});

app.listen(process.env.PORT, process.env.IP, function(){
	console.log(`All-In-One Server Up & Running On Port ${process.env.PORT}`);
});
