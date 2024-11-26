//Get elements from the HTML
const buttons = document.querySelectorAll("#buttons button");
const display = document.querySelector("#display");

let currentInput = "";
let resultDisplayed = false;

// Step 2: Add click events to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    // Step 3: Handle Clear button
    if (value === "C") {
      currentInput = ""; // Clear the input
      display.value = "0"; // Reset display to 0
      resultDisplayed = false; // Reset result state
      return;
    }

    // Step 4: Handle Equals button (=)
    if (value === "=") {
      try {
        currentInput = eval(currentInput).toString(); // Calculate the result
        display.value = currentInput; // Show the result
        resultDisplayed = true; // Mark result as displayed
      } catch (error) {
        display.value = "Error"; // Show error for invalid input
        currentInput = ""; // Clear current input
      }
      return;
    }

    // Step 5: Handle normal buttons (numbers and operators)
    if (resultDisplayed && !isNaN(value)) {
      // If result is displayed and user types a number, start fresh
      currentInput = value;
      resultDisplayed = false; // Reset result state
    } else {
      currentInput += value; // Add button text to the input
    }

    display.value = currentInput; // Update display
  });
});
