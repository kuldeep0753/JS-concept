//TODO:/------------------------- Basic level-------------------------
//------------------Q1. Create a Promise that simulates fetching user data and
// returns a success or failure randomly after 2 seconds.

// function fetchData(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             if(Math.random()*10>3){
//                 res("Hello World")
//             }else{
//                 rej("Rejectd the Promise")
//             }
//         },2000)
//     })
// }

// const solvePromise = fetchData();
// console.log(solvePromise);
// const respose = solvePromise.then(res=>console.log(res));
// respose.catch((err)=>console.log(err))

//---------------Q2.Convert the following code to use async/await instead of .then() and .catch():

// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Data fetched"), 1000);
//     });
// }

// getData().then((data) => console.log(data)).catch((error) => console.error(error));

//     });
//     });
// const p = new Promise((resolve, reject) => {
//   setTimeout(() => Math.random()*10>5?resolve("Rsolved😎"):reject("Different way🤔🤔"), 1000);
// });
// const p = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Different way🤔🤔"), 1000);
//   });

// async function getData() {
//  const res = await p;
//  console.log(res);
// }
// getData().catch((err)=>console.log(new Error(err)))

//----------------------Q3.Write a function that returns a rejected Promise with the message
// "Failed to load data" after 1 second. Handle the error using async/await.

// const promise = new Promise((res,rej)=>{
//     setTimeout(()=>{rej("Failed to load data")},1000)
// })

// // function handleRejectedPromise(){
// //     return promise.then((res)=>console.log(res)).catch((err)=>console.log(`Error: ${err}`))
// // }

// async function handleRejectedPromise(){
//     try{
//         const res = await promise;
//         console.log(res);
//     }
//     catch(err){
//         console.log(`Error: ${err}`)
//     }
// }
// handleRejectedPromise();

//TODO:/ -------------------------Intermediate level-------------------------

//-------------------------Q.4 Write a function that fetches user data and logs "Success" if it resolves, or "Failed"  if it rejects ,
// using both Promise and async/await.

//Note:-Why "pr" is need to define inside the function.
// -If a Promise is defined globally, it is created once when the script loads and retains its resolved/rejected state.
// -On multiple calls without refreshing, the same result will be returned because the Promise instance is fixed.
// -To make the result dynamic for each call:
// -Define the Promise inside the function so that a new Promise instance is created every time the function is called.
// -On page refresh, the script reloads, creating a new Promise instance, which recalculates Math.random() and gives a different result.

// const pr =  new Promise((res,rej)=>{
//         if(Math.random()*10>3){
//             res("Success")
//         }else{
//             rej("Failed")
//         }
// })
// async function fetchData(){
//     const pr =  new Promise((res,rej)=>{
//         if(Math.random()*10>3){
//             res("Success")
//         }else{
//             rej("Failed")
//         }
// })
//    try{
//     const res = await pr;
//     console.log(res);
//    }
//    catch(err){
//     console.log(err)
//    }
// }

// fetchData();
// fetchData();
// fetchData();

//-------------------------Q.5 Create a Promise that:
// Resolves with "Data loaded" after 2 seconds
// Rejects with "Failed to load data" if the input is false
// Use async/await to handle both success and failure cases.
// async function dataLoad() {
//   const input = prompt("Enter value 0 or 1");
//   const pr = new Promise((res, rej) => {
//     setTimeout(() => {
//       if (parseInt(input)) {
//         res("Data laoded");
//       } else {
//         rej("Failed to load data");
//       }
//     }, 2000);
//   });

//   try{
//     const res = await pr;
//     console.log(res);
//   }
//   catch(err){
//     console.log(err);
//   }

// }
// dataLoad();

//-------------------------Q.6 Create a function that:
// Fetches two pieces of data using Promise.all()
// Logs the data if both succeed
// Logs an error if any of them fail
// const p1 = new Promise((res, rej) => {
//   if (Math.random() * 10 > 3) {
//     res("Success");
//   } else {
//     rej("Failed");
//   }
// });

// const p2 = new Promise((res, rej) => {
//   if (Math.random() * 10 > 3) {
//     res("Success2");
//   } else {
//     rej("Failed2");
//   }
// });

// Promise.all([p1,p2]).then((res)=>console.log(res)).catch((err)=>console.log(err));

//TODO:/ --------------------Advanced Level-------------------------
//-------------------------Q.7 Create a function that:
// Tries to fetch data from an API
// Retries up to 3 times if the request fails
// If it still fails after 3 tries, log "Failed after 3 attempts"

// function apiCall() {
//   return `https://jsonplaceholder.typicode.com/todos`;
// }
// let count = 1;
// async function fetchData1() {
//   while (count <= 3) {
//     const fetchProfile = await fetch(apiCall());
//     console.log(fetchProfile);
//     if (fetchProfile.ok) {
//         //HERE "ok" will either false or true
//       const data = await fetchProfile.json();
//       console.log(data);
//       return;
//     } else {
//       console.log(` ${3 - count} Attempt left`);
//       count++;
//     }
//   }
//   throw new Error("Failed after 3 attempts");
// }
// fetchData1().catch((err) => {
//   console.log(err.message);
// });

//-------------------------Q.8 Write an async/await function that:
// Takes an array of URLs
// Uses Promise.allSettled() to fetch all the URLs
// Logs the status of each request (fulfilled or rejected)
// const urls = [
//     'https://jsonplaceholder.typicode.com/todos/1',
//     'https://jsonplaceholder.typicode.com/todos/2',
//     'https://jsonplaceholder.typicode.com/invalid-url',
//     'https://jsonplaceholder.typicode.com/todos/3',
//   ];

// async function settleAll(){
//     const allPromise = Promise.allSettled(urls.map(async (url)=>{
//        const res = await fetch(url);
//        console.log(res)
//        if(!res.ok)
//         throw new Error(res.status);
//        return res.json();
//     }));
//     const res = await allPromise; 
//     res.forEach((data,index)=>{
//         if(data.status === "fulfilled"){
//             console.log(`Value received: ${index}: Resolved`);
//         }
//         else{
//             console.log(`Invalid URL: ${index}:Rejected`)
//         }
//     });
//     console.log(res)
// }
// settleAll();

//-------------------------Q.9 Create a function that: 
// Takes two Promises
// Uses Promise.race() to log the result of the fastest one
// const p1 = new Promise((_,rej)=>{
//     setTimeout(()=>{rej("Rejected the promise")},5000)
// })
// const p2 = new Promise((res,rej)=>{
//     setTimeout(()=>{res("Resolved the promise")},3000)
// })

// async function racePromise(){
//     const allPromise = Promise.race([p1,p2]);
//     try{
//         const resolve = await allPromise;
//         console.log(resolve);
//     }catch(err){
//         console.log(err);
//     }
   
// }
// racePromise();
//Application:
// If an API call takes too long, you can set a timeout using Promise.race() to avoid blocking the app.


//-------------------------Q.10 Create a timeout wrapper for a Promise that:
//  Resolves if the Promise completes within 3 seconds
// Rejects with "Timeout" if it takes longer than 3 seconds
// Use Promise.race() to handle this scenario

