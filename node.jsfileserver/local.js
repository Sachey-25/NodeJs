//Local Modules in Node.js
var log = {
    //here 'info' is the variable ehich is futher assigned to a function
    info : function(info,name,age,city){
        console.log('info: ' + info);
        console.log('name: ' + name);
        console.log('age: ' + age);
        console.log('city: ' + city);

    },
    warning : function (warning){
        console.log('warning: ' + warning);
    },
    error:function(error){
        console.log('Error:' + error);
    }
}
module.exports = log;
