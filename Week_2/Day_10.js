Day 10 – DOM Manipulation (Browser Environment)

Selecting elements (getElementById, querySelector)

Changing content & styles, event listeners

Element Selection
🔹 Used getElementById() and querySelector() to target elements efficiently
🔹 Practiced selecting by:

id → document.getElementById("header")

class → document.querySelector(".btn")

tag → document.querySelector("p")

attribute → document.querySelector('[data-role="modal"]')

💡 Learned the importance of selecting the right element to manipulate and how querySelectorAll() helps with multiple elements.

Changing Content & Styles
🔹 Updated text with textContent, innerText, and innerHTML

textContent for raw text

innerHTML for inserting HTML tags
🔹 Dynamically applied styles using element.style

Example: element.style.backgroundColor = "lightblue"

Event Listeners
🔹 Attached interactive behaviors using addEventListener()

Example: button.addEventListener("click", handleClick)
🔹 Responded to various user events:

click → for buttons

mouseover → for hover effects

keydown → for keyboard interactivity