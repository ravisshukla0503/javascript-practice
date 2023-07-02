// Promise is a javascript object which handle asynchronus methods
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
//async keyword allow to use await keyword in the method
// await is used to wait for a completion of a asynchronus metohod so if any value depend upon that asynchronus result doesnot effec
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
