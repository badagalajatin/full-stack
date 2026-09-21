// Get HTML elements
const productName = document.getElementById("productName");
const quantity = document.getElementById("quantity");
const price = document.getElementById("price");

const calculateButton = document.getElementById("calculateButton");

const displayProduct = document.getElementById("displayProduct");
const totalPrice = document.getElementById("totalPrice");
const errorMessage = document.getElementById("errorMessage");

// Function to calculate total price
function calculateTotal() {
  const name = productName.value.trim();
  const qty = Number(quantity.value);
  const unitPrice = Number(price.value);

  // Validate input
  if (name === "") {
    errorMessage.textContent = "Please enter a product name.";
    totalPrice.textContent = "0.00";
    displayProduct.textContent = "-";
    return;
  }

  if (qty <= 0 || isNaN(qty)) {
    errorMessage.textContent = "Quantity must be greater than 0.";
    totalPrice.textContent = "0.00";
    return;
  }

  if (unitPrice < 0 || isNaN(unitPrice)) {
    errorMessage.textContent = "Price cannot be negative.";
    totalPrice.textContent = "0.00";
    return;
  }

  // Calculate total
  const total = qty * unitPrice;

  // Display result
  errorMessage.textContent = "";
  displayProduct.textContent = name;
  totalPrice.textContent = total.toFixed(2);
}

// Calculate when button is clicked
calculateButton.addEventListener("click", calculateTotal);

// Calculate dynamically when quantity changes
quantity.addEventListener("input", calculateTotal);

// Calculate dynamically when price changes
price.addEventListener("input", calculateTotal);

// Update product name dynamically
productName.addEventListener("input", calculateTotal);
