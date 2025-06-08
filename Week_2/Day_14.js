Day 14 – Closures & Lexical Scope

What is a closure?

Practical closure examples (e.g., counter function)

What is a Closure?
A closure is a function that remembers the variables from its lexical scope, even when the function is executed outside that scope.

In JavaScript:

Closure = Function + Lexical Environment (Scope)

This means a function can access variables defined outside its scope, even after the outer function has finished execution.

What is Lexical Scope?
Lexical scope means that the scope of variables is determined at the time of writing code (not at runtime). Inner functions have access to variables defined in their outer function because of where they were declared.

Practical Closure Example – Counter Function

function createCounter() {
  let count = 0; // Private variable

  return function () {
    count++;
    return count;
  };
}

const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

const counter2 = createCounter();
console.log(counter2()); // 1 (independent counter)