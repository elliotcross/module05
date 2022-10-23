var a = prompt("Please enter a number from 1 to 10"); // Request user input for variable a

var i = 1;                 // Set counter to 1
var msg = '';              // Message
var b; // Second variable is going to be the chosen number times i
 {
  // Do multiplication
  while (i < 11) {
	b = a * i  
    document.write(question + i + "x " + " " + " " + " = ", + b + "<br>");
  }
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;