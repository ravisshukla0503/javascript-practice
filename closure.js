// function binds together all the lexical scope enivornment is knows as closure

function z(){
    var a=10;
    return function y(){
        var b=100;
        return function x(){
            
            console.log(a+b);
            return a;
        }
       x();
    }
}
console.log(z()()())