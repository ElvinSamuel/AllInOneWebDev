var express = require('express');
var app = express();
var sass = require('node-sass');

// Insert some simple routes here:
app.use(express.static(__dirname + '/public'));

// Implementing Sass
sass.render({ file: scss_filename }, function(err, result) {});
var result = sass.renderSync({ data: scss_content });

app.get('/', function(req, res){
	res.sendFile('index');
});

app.listen(process.env.PORT, process.env.IP, function(){
	console.log(`All-In-One Server Up & Running On Port ${process.env.PORT}`);
});
