// Function to convert USD to INR based on exchange rate
function convertToINR(priceUSD) {
    const exchangeRate = 80; // 1 USD = 80 INR
    return priceUSD * exchangeRate;
  }
  
  // Original object with items and their prices in USD
  const items = {
    "Apple": 2.5,
    "Banana": 1.5,
    "Orange": 3.0,
    "Mango": 4.0
  };
  
  // Convert prices to INR using map function
  const itemsINR = Object.fromEntries(
    Object.entries(items).map(([item, priceUSD]) => {
      return [item, convertToINR(priceUSD)];
    })
  );
  
  // Display the converted prices in INR
  console.log("Items with prices in INR:", itemsINR);
  