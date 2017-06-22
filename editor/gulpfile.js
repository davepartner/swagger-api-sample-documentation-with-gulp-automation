var gulp = require("gulp");
var yaml = require("js-yaml");
var path = require("path");
var fs = require("fs");

//converts yaml - json
gulp.task("swagger", function(){
	var doc = yaml.safeLoad(fs.readFileSync(path.join(__dirname, "api/swagger/swagger.yaml")));
	fs.writeFileSync(
		path.join(__dirname, "../lumen-blog.json"),
		JSON.stringify(doc, null," ")
		);
	
});


//watches for changes
gulp.task("watch", function(){
	gulp.watch("api/swagger/swagger.yaml", ["swagger"]);
})






