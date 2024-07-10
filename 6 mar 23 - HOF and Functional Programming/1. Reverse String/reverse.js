// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Function to reverse the input string after a delay of 2 seconds
  function reverseAfterDelay(input) {
    setTimeout(function() {
      // Call reverseString function after 2 seconds
      let reversed = reverseString(input);
      console.log(reversed);
    }, 2000); // 2000 milliseconds = 2 seconds
  }
  
  // Example usage
  let input = "Hello, world!";
  console.log(input);
  reverseAfterDelay(input);
  