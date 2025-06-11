Day 17 – Promises

Creating & consuming promises

then, catch, finally

What is a Promise?
A Promise is an object that represents the future result of an asynchronous operation.

It has three states:

Pending: initial state.

Fulfilled: the operation completed successfully.

Rejected: the operation failed.


Creating a Promise

const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("✅ Promise resolved!");
  } else {
    reject("❌ Promise rejected!");
  }
});

resolve(value) – called when the operation is successful.

reject(error) – called when the operation fails.

Consuming a Promise
We use .then(), .catch(), and .finally() to handle the result.

✅ Example: Basic Promise Consumption

myPromise
  .then((result) => {
    console.log("Then:", result);
  })
  .catch((error) => {
    console.log("Catch:", error);
  })
  .finally(() => {
    console.log("Finally: Always runs");
  });
.then() runs if the promise is fulfilled.

.catch() runs if the promise is rejected.

.finally() runs no matter what (success or failure).

Chaining Promises
You can chain .then() calls to run asynchronous operations in sequence:


new Promise((resolve) => {
  setTimeout(() => resolve(10), 1000);
})
  .then((num) => {
    console.log("First:", num); // 10
    return num * 2;
  })
  .then((num) => {
    console.log("Second:", num); // 20
    return num * 3;
  })
  .then((num) => {
    console.log("Third:", num); // 60
  });

  Error Handling in Chains
Errors thrown in any .then() will be caught in the nearest .catch():


new Promise((resolve) => {
  resolve("Start");
})
  .then((data) => {
    throw new Error("Something went wrong");
  })
  .catch((err) => {
    console.log("Caught Error:", err.message);
  });

  finally()
Useful for cleanup tasks like hiding a loader, closing a modal, etc.


fakeAPI()
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((err) => {
    console.error("Error:", err);
  })
  .finally(() => {
    console.log("Done loading!");
  });