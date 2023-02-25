// Promise is a javascript object which contains producing code and consuming code
// In Producing code where you get the result res or rej
//in consuming code where you wait for a result
/*
const myPromise = new Promise((res, rej) => {
    let x=0;
    if(x)
    res('hello');
    rej('bye');
});

myPromise.then(
    result => console.log(result),
    error => console.log(error)
);
*/

//Async or Await
//async is used before function where you get the result in Promise
// await is used to wait for a promise return

const getcountry = async () => {
  const countries = await fetch(
    "https://api.countrystatecity.in/v1/countries",
    {
      headers: {
        "X-CSCAPI-KEY":
          "R3NUdUE3RTdlbWt5ckF3WEJLMkFwQ0VJWDNUaThLUGdrU09VZEhuaA",
      },
    }
  );
  console.log(countries.json());
};
getcountry();
