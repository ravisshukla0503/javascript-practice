// function binds together all the lexical scope enivornment

function z(){
    var a=10;
    function y(){
        var b=100;
        function x(){
            console.log(a, b);
        }
       x();
    }
    y();
}
var print = z();
