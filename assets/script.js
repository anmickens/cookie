// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Ashley Mickens" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
   
    // HINT: You can delete this console.log after you no longer need it!
    console.log('add-gb')

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons

var button = document.getElementById('add-gb'),
count = 0
button.onclick = function () {
    count ++;
    button.innerHTML = count;    

}

var button = document.getElementById('minus-gb'),
count = 0
button.onclick = function () {
    count --;
    button.innerHTML = count;
}

var button = document.getElementById('add-cc'),
count = 0
button.onclick = function () {
    count ++;
    button.innerHTML = count;
}

var button = document.getElementById('add-sugar'),
count = 0
button.onclick = function () {
    count ++;
    button.innerHTML = count;
}

var button = document.getElementById('minus-cc'),
count = 0
button.onclick = function () {
    count --;
    button.innerHTML = count;
}

var button = document.getElementById('minus-sugar'),
count = 0
button.onclick = function () {
    count --;
    button.innerHTML = count;
}