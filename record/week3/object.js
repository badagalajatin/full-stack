console.log("===== Shopping Cart Management System =====");

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // Add Item
  addItem(name, price) {
    this.items.push({
      product: name,
      cost: price,
    });

    console.log(name + " added to cart successfully.");
  }

  // Display Items
  displayItems() {
    console.log("\nItems in Shopping Cart:");

    for (let i = 0; i < this.items.length; i++) {
      console.log(
        i + 1 + ". " + this.items[i].product + " - ₹" + this.items[i].cost,
      );
    }
  }

  // Calculate Total Cost
  totalCost() {
    let total = 0;

    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i].cost;
    }

    return total;
  }

  // Remove Last Item
  removeItem() {
    let removedItem = this.items.pop();

    console.log("\nRemoved Item: " + removedItem.product);
  }
}

const cart = new ShoppingCart();

cart.addItem("Laptop", 45000);
cart.addItem("Mouse", 800);
cart.addItem("Keyboard", 1500);
cart.addItem("Headphones", 2000);

cart.displayItems();

console.log("\nTotal Cost: ₹" + cart.totalCost());

cart.removeItem();

console.log("\nAfter Removing One Item:");

cart.displayItems();

console.log("\nNew Total Cost: ₹" + cart.totalCost());
