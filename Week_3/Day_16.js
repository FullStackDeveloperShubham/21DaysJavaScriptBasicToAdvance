Day 16 – Asynchronous JavaScript

setTimeout, setInterval

Callback hell

1. setTimeout()
Used to delay execution of code after a specified time (in milliseconds).


setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

Runs once after the delay.

Delay is non-blocking.

. setInterval()
Used to repeatedly execute code at fixed intervals.


setInterval(() => {
  console.log("Repeats every 1 second");
}, 1000);
Runs continuously until stopped using clearInterval()

How to stop intervals

const intervalId = setInterval(() => {
  console.log("Repeating...");
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("Stopped");
}, 5000);

3. Callback Functions
A callback is a function passed into another function to be called later.


function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

function askQuestion() {
  console.log("How are you?");
}

greet("Shubham", askQuestion);

4. Callback Hell
When callbacks are nested inside callbacks, it becomes:

Hard to read

Hard to debug

Hard to maintain

🔻 Example of Callback Hell:

loginUser("shubham", () => {
  getUserProfile((profile) => {
    getProfilePosts(profile.id, (posts) => {
      console.log(posts);
    });
  });
});

Solution: Use Promises or async/await
✨ Promises:

loginUser("shubham")
  .then(getUserProfile)
  .then(getProfilePosts)
  .then(posts => console.log(posts))
  .catch(error => console.error(error));

✨ async/await:

async function showUserPosts() {
  try {
    const user = await loginUser("shubham");
    const profile = await getUserProfile(user);
    const posts = await getProfilePosts(profile.id);
    console.log(posts);
  } catch (err) {
    console.error(err);
  }
}