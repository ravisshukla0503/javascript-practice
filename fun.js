/*
callback function => pass a function as an argunment to another function and return new function

function cal(num1, num2, callback){
   return callback(num1+num2);
}

function res( result ){
    console.log(result);
}
cal(5,6, res);

function statement and declaration

function aa(){
    console.log("hello")
}
*/

/*function expression and variable it is also treat as an variable

const aa = function(){
    console.log("hello")
}
*/

/* anonmous function(fun without name)

function(){
    console.log('hello');
}
*/

/*
first class function or high order function or callback function are same
=> function take as argunment and return a new function
*/

/*
function parameter => written with function name (int a)
function argunment => written real values (5)
*/