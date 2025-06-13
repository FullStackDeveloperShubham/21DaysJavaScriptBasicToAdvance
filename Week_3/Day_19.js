Day 19 – Fetch API & Working with APIs

Making GET/POST requests

JSON parsing & error handling

What is the Fetch API?
The Fetch API is a modern JavaScript interface for making HTTP requests. It returns Promises, making it ideal for async programming.


fetch(url, options?) // returns a Promise

GET Request (Fetching Data)
✅ Example:

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // parse JSON
  })
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error:', error));
🔍 Breakdown:
.ok: Boolean — was the response status in the 200–299 range?

.json(): Parses the JSON body and returns a Promise.

.catch(): Handles any network errors or thrown exceptions.

POST Request (Sending Data)
✅ Example:

const postData = {
  title: 'foo',
  body: 'bar',
  userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(postData) // convert JS object to JSON string
})
  .then(response => {
    if (!response.ok) throw new Error('Failed to POST');
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('POST error:', error));

  Error Handling
  Common scenarios:
  
  fetch() fails due to no internet or wrong URL → handled by .catch().
  
  Response comes back with an error (e.g., 404, 500) → handle with if (!res.ok).
  
  Best practice:
  
 
  fetch('https://api.example.com/data')
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    })
    .then(data => console.log(data))
    .catch(err => console.error('Error fetching data:', err.message));