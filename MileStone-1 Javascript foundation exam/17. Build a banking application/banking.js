// Define a customer object with name and balance properties
let customer = {
    name: "John Doe",
    balance: 1000,

    // Method to deposit money into the account
    deposit: function(amount) {
        if (amount > 0) {
            this.balance += amount;
            return `Successfully deposited $${amount.toFixed(2)}. New balance: $${this.balance.toFixed(2)}`;
        } else {
            return "Deposit amount must be greater than zero.";
        }
    },

    // Method to withdraw money from the account
    withdraw: function(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return `Successfully withdrew $${amount.toFixed(2)}. New balance: $${this.balance.toFixed(2)}`;
        } else {
            return "Withdrawal amount must be greater than zero and less than or equal to your balance.";
        }
    }
};

// Function to display customer details
function displayCustomerDetails() {
    document.getElementById("customer-name").textContent = customer.name;
    document.getElementById("customer-balance").textContent = customer.balance.toFixed(2);
}

// Function to handle deposit
function handleDeposit() {
    let amount = parseFloat(document.getElementById("amount").value);
    if (isNaN(amount) || amount <= 0) {
        showTransactionMessage("Please enter a valid amount to deposit.", "error");
        return;
    }
    let message = customer.deposit(amount);
    displayCustomerDetails();
    showTransactionMessage(message, "success");
}

// Function to handle withdrawal
function handleWithdrawal() {
    let amount = parseFloat(document.getElementById("amount").value);
    if (isNaN(amount) || amount <= 0) {
        showTransactionMessage("Please enter a valid amount to withdraw.", "error");
        return;
    }
    let message = customer.withdraw(amount);
    displayCustomerDetails();
    showTransactionMessage(message, "success");
}

// Function to display transaction messages
function showTransactionMessage(message, messageType) {
    let transactionMessages = document.getElementById("transaction-messages");
    transactionMessages.textContent = message;
    if (messageType === "error") {
        transactionMessages.style.color = "#dc3545";
    } else if (messageType === "success") {
        transactionMessages.style.color = "#28a745";
    }
}

// Initial display of customer details
displayCustomerDetails();
