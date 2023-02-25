const arr = ['ravi', 'kavi'];

for(let x in arr){
    console.log(arr[x]);
}

for(let x of arr){
    console.log(x);
}

arr.forEach((value) => {
    console.log(value);
})