// Write your code here!
// Task 1: Create a new div element programmatically
const element = document.createElement("div");

// Task 2: Append the created div element to the body
document.body.appendChild(element);

// Task 3: Create an unordered list (ul) and append it to the div element
const ul = document.createElement("ul");
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.appendChild(li);
}
element.appendChild(ul);

// Task 4: Remove the main element with id "main" from the DOM
const main = document.getElementById("main");
main.parentNode.removeChild(main);

// Task 5: Create a new h1 element with id "victory" and set its content
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Glen is the champion";

// Task 6: Add a class "highlight" to the newHeader element
newHeader.classList.add("highlight");

// Task 7: Append the newHeader element to the body
document.body.appendChild(newHeader);

// Task 8: Remove the second child element from the ul
const secondChild = ul.querySelector("li:nth-child(2)");
ul.removeChild(secondChild);
