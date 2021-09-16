// imported that loal.js file and now the data is applied to 
// localmodule.
var localmodule = require('./local');
//Parameter to the first fuction in local.js file
localmodule.info("Parameter passed to the first function");
//Displaying the output being in application.js file.
console.log("present in the local.js file.");
//Parameter to the second function in the local file
localmodule.warning("My name is second parameter ");
//Displaying the output being in application.js file.
console.log("Iam present in local.js file");
//Parameter to the third function in the local file
localmodule.error("Iam the last function present");
//Displaying the output being in application.js file.
console.log("in the local.fs file and I am the error");
console.log("--------------------------");
localmodule.info("parameter","sachin",28,"bangalore");