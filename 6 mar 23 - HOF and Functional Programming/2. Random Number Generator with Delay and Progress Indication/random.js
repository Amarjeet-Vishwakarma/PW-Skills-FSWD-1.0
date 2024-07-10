// Function to generate a random number between min (inclusive) and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function to generate random number after a specified delay, with progress indication
  function generateRandomNumberWithDelay(delayInSeconds) {
    console.log(`Generating random number after ${delayInSeconds} seconds...`);
  
    let timeRemaining = delayInSeconds;
  
    // Interval to display progress message every second
    let interval = setInterval(function() {
      console.log(`Time remaining: ${timeRemaining} seconds`);
      timeRemaining--;
  
      if (timeRemaining < 0) {
        clearInterval(interval); // Stop the interval when time is up
        setTimeout(function() {
          let randomNumber = getRandomNumber(1, 100); // Example: random number between 1 and 100
          console.log(`Random number generated: ${randomNumber}`);
        }, 0); // Execute immediately after interval is cleared
      }
    }, 1000); // 1000 milliseconds = 1 second
  }
  
  // Example usage: generate random number after 3 seconds (modifiable delay)
  let delayInSeconds = 3;
  generateRandomNumberWithDelay(delayInSeconds);
  
  // Example usage: generate random number after 5 seconds
  // let delayInSeconds = 5;
  // generateRandomNumberWithDelay(delayInSeconds);
  