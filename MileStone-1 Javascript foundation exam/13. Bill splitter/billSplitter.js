function generateDishPriceInputs() {
    // Get input value for number of dishes
    let numberOfDishes = parseInt(document.getElementById('numberOfDishes').value);
    
    // Get dishPrices container
    let dishPricesContainer = document.getElementById('dishPrices');
    
    // Clear existing inputs
    dishPricesContainer.innerHTML = '';
    
    // Create inputs for each dish price
    for (let i = 1; i <= numberOfDishes; i++) {
      let inputContainer = document.createElement('div'); // Container for each input
      inputContainer.classList.add('dish-input-container');
      
      let label = document.createElement('label');
      label.textContent = `Dish ${i}: `;
      inputContainer.appendChild(label);
      
      let input = document.createElement('input');
      input.type = 'number';
      input.min = '0';
      input.step = '0.01';
      input.className = 'dishPrice';
      inputContainer.appendChild(input);
      
      dishPricesContainer.appendChild(inputContainer);
    }
  }
  
  function calculateBill() {
    // Get input values
    let numberOfDishes = parseInt(document.getElementById('numberOfDishes').value);
    let people = parseInt(document.getElementById('people').value);
    
    // Validate input
    if (isNaN(numberOfDishes) || numberOfDishes < 1 || isNaN(people) || people < 1) {
      alert('Please enter valid numbers for Number of Dishes and Number of People.');
      return;
    }
  
    // Initialize variables for total bill and bill per person
    let totalBill = 0;
    let allPricesValid = true; // Flag to track if all prices are valid
  
    // Calculate total bill based on entered prices
    let dishPriceInputs = document.getElementsByClassName('dishPrice');
    for (let i = 0; i < dishPriceInputs.length; i++) {
      let price = parseFloat(dishPriceInputs[i].value.trim()); // Trim to remove leading/trailing spaces
      if (isNaN(price) || price < 0) {
        allPricesValid = false;
        // Optionally highlight the invalid input for user's attention
        dishPriceInputs[i].style.border = '1px solid red';
      } else {
        totalBill += price;
      }
    }
  
    // Check if all prices are valid
    if (!allPricesValid) {
      alert('Please enter valid prices (greater than or equal to zero) for all dishes.');
      return;
    }
  
    // Calculate bill per person
    let billPerPerson = totalBill / people;
  
    // Display results
    document.getElementById('totalBill').innerText = `Total Bill: ₹${totalBill.toFixed(2)}`;
    document.getElementById('billPerPerson').innerText = `Bill per Person: ₹${billPerPerson.toFixed(2)}`;
  }
  