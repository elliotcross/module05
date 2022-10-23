var a = prompt("Please enter a number from 0 to 10"); // Request user input for variable a
var msg = '<h2>Multiplication Table</h2>';            // Initialize variable message so table will have a heading
var i = 0;                 							// Set counter to 0
					// Do multiplication
while (i < 11) {
    msg += i + ' x ' + a + ' = ' + (i * a) + '<br />';
    i++;
  }


// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;

//items from original code not being used...
/* var table = 3; Changed to user input via prompt */
/* var operator = 'addition'; Removed addition operator */

/* if (operator === 'addition') {

  while (i < 11) {
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
    i++;
  } Removed addition as option because this page will be multiplication only */
