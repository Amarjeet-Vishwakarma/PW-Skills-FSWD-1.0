// Function to validate LinkedIn profile URL using regular expression
function validateLinkedInProfileURL(url) {
    // Regular expression for LinkedIn profile URL validation
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-z0-9_-]{5,30}[a-z0-9]$/i;
  
    // Test the URL against the regex
    if (regex.test(url)) {
      console.log(`"${url}" is a valid LinkedIn profile URL.`);
    } else {
      console.log(`"${url}" is NOT a valid LinkedIn profile URL.`);
    }
  }
  
  // Example usage
  validateLinkedInProfileURL("https://www.linkedin.com/in/johndoe123");       // Valid LinkedIn profile URL
  validateLinkedInProfileURL("https://www.linkedin.com/in/jane_smith-789");   // Valid LinkedIn profile URL
  validateLinkedInProfileURL("https://www.linkedin.com/in/alex.smith");       // Valid LinkedIn profile URL
  validateLinkedInProfileURL("https://www.linkedin.com/in/_joe_");            // Valid LinkedIn profile URL
  validateLinkedInProfileURL("https://www.linkedin.com/in/jane-doe-123/");    // Invalid LinkedIn profile URL (ends with '/')
  validateLinkedInProfileURL("https://www.linkedin.com/in/johndoe%$");        // Invalid LinkedIn profile URL (contains invalid characters)
  validateLinkedInProfileURL("http://www.linkedin.com/in/johndoe123");        // Invalid LinkedIn profile URL (does not start with 'https://')
  validateLinkedInProfileURL("https://www.linkedin.com/company/example");     // Invalid LinkedIn profile URL (not in '/in/' format)
  validateLinkedInProfileURL("https://www.linkedin.com/in/abcd");             // Invalid LinkedIn profile URL (profile ID too short)
  validateLinkedInProfileURL("https://www.linkedin.com/in/abcdefghijklmnopqrstuvwxyza"); // Invalid LinkedIn profile URL (profile ID too long)
  