//TODO: ------------------------- Basic level -------------------------

//------------------Q1. Create a Promise that simulates fetching user data and
// returns a success or failure randomly after 2 seconds.

function fetchData() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        // Randomly resolve or reject based on a value greater than 3
        if (Math.random() * 10 > 3) {
          res("Hello World"); // Success case
        } else {
          rej("Rejected the Promise"); // Failure case
        }
      }, 2000); // Delay of 2 seconds
    });
  }
  
  const solvePromise = fetchData();
  solvePromise
    .then(res => console.log(res)) // Handle success
    .catch(err => console.log(err)); // Handle failure
  
  //---------------Q2. Convert the following code to use async/await instead of .then() and .catch()
  
  const p = new Promise((resolve, reject) => {
    // Simulate success or failure after 1 second
    setTimeout(() => Math.random() * 10 > 5 ? resolve("Resolved 😎") : reject("Different way 🤔🤔"), 1000);
  });
  
  async function getData() {
    try {
      const res = await p; // Await result
      console.log(res);
    } catch (err) {
      console.log(new Error(err)); // Handle error using try-catch
    }
  }
  
  getData();
  
  //----------------------Q3. Write a function that returns a rejected Promise with the message
  // "Failed to load data" after 1 second. Handle the error using async/await.
  
  const promise = new Promise((res, rej) => {
    setTimeout(() => rej("Failed to load data"), 1000); // Reject after 1 second
  });
  
  async function handleRejectedPromise() {
    try {
      const res = await promise;
      console.log(res);
    } catch (err) {
      console.log(`Error: ${err}`); // Handle rejection
    }
  }
  
  handleRejectedPromise();
  
  //TODO: ------------------------- Intermediate level -------------------------
  
  //-------------------------Q.4 Write a function that fetches user data and logs "Success" if it resolves, or "Failed" if it rejects,
  // using both Promise and async/await.
  
  async function fetchData() {
    const pr = new Promise((res, rej) => {
      if (Math.random() * 10 > 3) {
        res("Success"); // Success case
      } else {
        rej("Failed"); // Failure case
      }
    });
  
    try {
      const res = await pr;
      console.log(res);
    } catch (err) {
      console.log(err); // Handle error
    }
  }
  
  fetchData();
  fetchData();
  fetchData(); // Call multiple times to test success and failure
  
  //-------------------------Q.5 Create a Promise that:
  // Resolves with "Data loaded" after 2 seconds
  // Rejects with "Failed to load data" if the input is false
  // Use async/await to handle both success and failure cases.
  
  async function dataLoad() {
    const input = prompt("Enter value 0 or 1"); // Take user input
    const pr = new Promise((res, rej) => {
      setTimeout(() => {
        if (parseInt(input)) {
          res("Data loaded");
        } else {
          rej("Failed to load data");
        }
      }, 2000); // Delay of 2 seconds
    });
  
    try {
      const res = await pr;
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  
  // dataLoad(); // Uncomment to test
  
  //-------------------------Q.6 Create a function that:
  // Fetches two pieces of data using Promise.all()
  // Logs the data if both succeed
  // Logs an error if any of them fail
  
  const p1 = new Promise((res, rej) => {
    if (Math.random() * 10 > 3) {
      res("Success");
    } else {
      rej("Failed");
    }
  });
  
  const p2 = new Promise((res, rej) => {
    if (Math.random() * 10 > 3) {
      res("Success2");
    } else {
      rej("Failed2");
    }
  });
  
  Promise.all([p1, p2])
    .then(res => console.log(res)) // Logs success if both succeed
    .catch(err => console.log(err)); // Logs failure if any fail
  
  //TODO: -------------------- Advanced Level -------------------------
  
  //-------------------------Q.7 Create a function that:
  // Tries to fetch data from an API
  // Retries up to 3 times if the request fails
  // If it still fails after 3 tries, log "Failed after 3 attempts"
  
  function apiCall() {
    return `https://jsonplaceholder.typicode.com/todos`;
  }
  
  async function fetchData1() {
    let count = 1;
    while (count <= 3) {
      const fetchProfile = await fetch(apiCall());
      if (fetchProfile.ok) {
        const data = await fetchProfile.json();
        console.log(data);
        return;
      } else {
        console.log(`${3 - count} Attempt left`);
        count++;
      }
    }
    throw new Error("Failed after 3 attempts");
  }
  
  fetchData1().catch(err => console.log(err.message));
  
  //-------------------------Q.8 Write an async/await function that:
  // Takes an array of URLs
  // Uses Promise.allSettled() to fetch all the URLs
  // Logs the status of each request (fulfilled or rejected)
  
  const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/invalid-url',
    'https://jsonplaceholder.typicode.com/todos/3',
  ];
  
  async function settleAll() {
    const allPromise = Promise.allSettled(urls.map(async (url) => {
      const res = await fetch(url);
      if (!res.ok) throw new Error(res.status);
      return res.json();
    }));
  
    const res = await allPromise;
    res.forEach((data, index) => {
      if (data.status === "fulfilled") {
        console.log(`Value received: ${index}: Resolved`);
      } else {
        console.log(`Invalid URL: ${index}: Rejected`);
      }
    });
  }
  
  settleAll();
  
  //-------------------------Q.9 Create a function that:
  // Takes two Promises
  // Uses Promise.race() to log the result of the fastest one
  
  const p3 = new Promise((_, rej) => {
    setTimeout(() => { rej("Rejected the promise") }, 5000); // 5 sec delay
  });
  
  const p4 = new Promise((res) => {
    setTimeout(() => { res("Resolved the promise") }, 3000); // 3 sec delay
  });
  
  async function racePromise() {
    try {
      const resolve = await Promise.race([p3, p4]);
      console.log(resolve);
    } catch (err) {
      console.log(err);
    }
  }
  
  racePromise();
  
  //-------------------------Q.10 Create a timeout wrapper for a Promise that:
  // Resolves if the Promise completes within 3 seconds
  // Rejects with "Timeout" if it takes longer than 3 seconds
  // Use Promise.race() to handle this scenario
  
  function timeoutWrapper(promise, timeout) {
    return Promise.race([
      promise,
      new Promise((_, reject) =>
        setTimeout(() => reject("Timeout"), timeout)
      ),
    ]);
  }
  
  const testPromise = new Promise((resolve) => {
    setTimeout(() => resolve("Completed!"), 4000); // Completes in 4 sec (timeout exceeds)
  });
  
  timeoutWrapper(testPromise, 3000)
    .then(res => console.log(res))
    .catch(err => console.log(err)); // Logs "Timeout"  