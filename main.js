var argv = process.argv.slice(2);
//#Ignore me
//@console.log('Hello');
var fs = require('fs');

var text = fs.readFileSync(argv[0], "utf8");
var lines = text.split(/[\r\n]+/g);
var cmd="";

for(i = 0; i < lines.length; i++){
if(lines[i].charAt(0)=="#"){
	// Do nothing
} else {
if(lines[i].charAt(0) != "@"){
	if(lines[i].indexOf("if") > -1 || lines[i].indexOf("ido") > -1 || lines[i].indexOf("ior") > -1 || lines[i].indexOf("ifinally") > -1 || lines[i].indexOf("[!") > -1 || lines[i].indexOf("!]") > -1){
		cmd1 = lines[i].replace(" if ", "if(");
		cmd1 = cmd1.replace(" ido ", "){");
		cmd1 = cmd1.replace(" ior", "} elseif(");
		cmd1 = cmd1.replace(" ido ", "){");
		cmd1 = cmd1.replace(" ifinally ", "}");
		cmd1 = cmd1.replace("[!", "\r\n /* \r\n");
		cmd1 = cmd1.replace("!]", "\r\n */ \r\n");
		cmd = cmd + cmd1;
        } else {		
      var cmd = cmd + lines[i];
	    }
} else {
console.log(lines[i].substr(1));
}
}
}
fs.writeFileSync("script.txt.js", cmd)
//eval(cmd);
