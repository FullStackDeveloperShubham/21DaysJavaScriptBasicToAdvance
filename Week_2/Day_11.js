Day 11 – Events & Event Handling

Click, keypress, form events

addEventListener, event object

1. What Are Events?
Events are actions that happen in the browser, like:

A user clicks a button

A key is pressed

A form is submitted


2. Common Event Types

| Event Type  | Description                          |
| ----------- | ------------------------------------ |
| `click`     | Triggered when an element is clicked |
| `keypress`  | Triggered when a key is pressed      |
| `submit`    | Triggered when a form is submitted   |
| `mouseover` | Mouse pointer over an element        |
| `change`    | Input value is changed               |


3. addEventListener() Syntax
Used to register an event handler.


element.addEventListener("event", callbackFunction);
Example:

const btn = document.getElementById("myBtn");

btn.addEventListener("click", function () {
  alert("Button was clicked!");
});

4. The Event Object
Every event handler gets an event object with information about the event.

Example:


document.addEventListener("keydown", function(event) {
  console.log("Key pressed:", event.key);
});

5. Form Event Example

<form id="loginForm">
  <input type="text" name="username" />
  <button type="submit">Login</button>
</form>

<script>
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload
    alert("Form submitted!");
  });
</script>