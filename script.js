// Define a variable to store the keys pressed
var keysPressed = "";

// Add an event listener to the document to listen for key presses
document.addEventListener("keydown", function(event) {
  // Append the key code of the pressed key to the keysPressed variable
  keysPressed += event.keyCode;
  
  // Check if the keysPressed variable contains the string "games"
  if (keysPressed.includes(71,65,77,69,83)) { // 71=G, 65=A, 77=M, 69=E, 83=S
    // Redirect to the games page
    window.location.href = "/games.php";
  }
});
