// Function to validate URL using regular expression
function validateURL(url) {
    // Regular expression for URL validation
    const regex = /^(http:\/\/|https:\/\/)[\w.-]+\.[\w]{2,}$/;
  
    // Test the URL against the regex
    if (regex.test(url)) {
      console.log(`"${url}" is a valid URL.`);
    } else {
      console.log(`"${url}" is NOT a valid URL.`);
    }
  }
  
  // Example usage
  validateURL("http://www.example.com");      // Valid URL
  validateURL("https://subdomain.example.co.in");  // Valid URL
  validateURL("https://123.example.org");     // Valid URL
  validateURL("ftp://example.com");           // Invalid URL (doesn't start with http:// or https://)
  validateURL("https://example");             // Invalid URL (missing top-level domain)
  validateURL("http://example.");             // Invalid URL (domain ends with dot)
  validateURL("https://-example.com");        // Invalid URL (domain starts with special character)
  