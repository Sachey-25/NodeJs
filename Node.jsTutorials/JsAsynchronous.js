/*function asynchronous(){
    console.log("I am coming after 3 seconds");
    console.log("Heloo World!!!!");
}
//methodology involved in synchronous
setTimeout(asynchronous, 3000);
console.log("This message is shown first");

function another_example(){
    console.log("This is second set time");
}
let valid = setTimeout(another_example, 4000);
console.log('Id: ' +valid);

function onceagain(){
    console.log("This is third set time");
}
let Intervalid = setTimeout(onceagain, 1000);
console.log("Another id: " , 'Id: ' + Intervalid); */


//display the evry after 3 seconds
function showTime(){
    //return new date and time
    let dateTime = new Date(); //Date object 
   // console.log("Date time");
    //Return the current local time
    let time = dateTime.toLocaleTimeString();
    let date = dateTime.getDate();
    console.log("LocalTIime");
    //print the time now
    console.log(time);
    console.log(date);
    console.log(dateTime);
    //display the time after 3 seconds
   let id_one = setTimeout(showTime, 3000);
   clearTimeout(id_one);
}
// call the function
showTime();

//clearTimeout --> request --> thread (3sec) --> server 
//          node.js.org<-- request <-- thread(3sec) <-- server

let count = 0;
function increasecount(){
    count += 1;
    console.log(count);
}
let id = setTimeout(increasecount, 3000)

clearTimeout(id);
console.log("SetTimeOut is stopped");

function one_time(){
    //Object created for Date method()
   let newDateTime= new Date ();
   //Converting to Local time into String 
   let time = newDateTime.toLocaleTimeString();
   //Displaying the time
   console.log(time);
}
// Thread set for 300milisec
let one_id = setTimeout(one_time, 3000);
// Thread set for 300milisec
let two_id = setTimeout(one_time, 3000);
// Thread set for 300milisec
let third_id = setTimeout(one_time, 3000);

//After 3000 miliSec thread is going down
clearTimeout(third_id);
//Calling the function
one_time();
console.log("Thread is stopped after 3seconds");
console.log("This has executed 3 requets in meantime");