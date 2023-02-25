const arr = [1,2,3,4,5];

const map = arr.map((value)=> { // operation on each element of an array and return new array
   return value+value;
});

const filter = arr.filter((value)=> {  // filter is used to find specific value in array on some condition
    if(value%2==0){    
        return value*value;
    }
})

const reduce = arr.reduce((a,b)=> { // operation on each element of an array and return single value
  return a + b;
})

console.log(`${map} ${filter} ${reduce}`)

const sortarr = arr.sort((a,b) => {
    return a-b;
});

console.log(sortarr);

const revarr = arr.reverse();
console.log(revarr);

arr.pop(2);
console.log(arr);

arr.unshift(1);
console.log(arr);