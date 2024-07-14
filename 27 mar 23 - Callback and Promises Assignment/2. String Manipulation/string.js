function manipulatestring(inputstring, callback) {
  const manipulatedstring = inputstring.toUpperCase();

  callback(manipulatedstring);
}

function logstring(manipulatedstring) {
  console.log(`The manipulated string is: ${manipulatedstring}`);
}

// Expected output:

manipulatestring("hello, world!", logstring); 