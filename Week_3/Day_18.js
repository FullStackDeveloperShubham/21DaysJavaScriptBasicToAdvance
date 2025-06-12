Day 18 – Async/Await

Writing clean async code

Try/catch with async functions

What is async/await?
async makes a function return a promise.

await pauses the execution inside an async function until the promise resolves or rejects.


async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}
✨ Why Use async/await?
Cleaner syntax

Avoids deeply nested .then() chains

Easier to read and debug

Handling Errors with try...catch
Async functions can throw errors just like sync functions. Use try...catch to handle them.

✅ Example:

async function getUserData(userId) {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    console.log('User Data:', data);
  } catch (error) {
    console.error('Failed to fetch user data:', error.message);
  }
}

Example: Async with Multiple Awaits

async function loadPage() {
  try {
    const user = await fetchUser();
    const posts = await fetchPosts(user.id);
    display(user, posts);
  } catch (error) {
    console.error('Error loading page:', error.message);
  }
}

Tips for Clean Async Code
Use meaningful function names
✅ fetchUserData() instead of getData()

Group await calls when independent


const [user, posts] = await Promise.all([
  fetchUser(),
  fetchPosts()
]);