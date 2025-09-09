//check
console.log("Hello world!");

//select button using querySelector
const button = document.querySelector("button");

//log the element to the console
console.log(button.textContent); // Click me!

//add an event listener method and log to the console when the event occurs
button.addEventListener("click", function (event) {
  console.log(event);
}); // this outputs to the console when the button is clicked

button.addEventListener("mouseover", function (event) {
  console.log(event);
}); // this outputs to the console when the mouse hovers over the click button

// the below takes the element with the id of class and changes the textContent from Text to New text
document.getElementById("myP").textContent = `New text`;

// the below creates a variable called mdnButton and logs the text content of that element to the console
const mdnButton = document.getElementById("mdnButton");
console.log(mdnButton.textContent);

//using the variable created above you can add an event listener so when a user clicks on the button, the alertFunction is called
mdnButton.addEventListener("click", alertFunction);

// the above event listener won't do anything yet as the alertFunction hasn't been declared, so we declare it below.
function alertFunction() {
  alert("You've clicked the MDN test button");
}
