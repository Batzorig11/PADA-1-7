class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.price * this.quantity;
  }
}

class Inventory {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(name) {
    this.items = this.items.filter((item) => item.name !== name);
  }

  getInventoryValue() {
    return this.items.reduce((total, item) => {
      return total + item.getTotalPrice();
    }, 0);
  }

  printInventory() {
    this.items.forEach((item) => {
      console.log(
        `Name: ${item.name}, Price: ${item.price}, Quantity: ${item.quantity}, Total: ${item.getTotalPrice()}`,
      );
    });
  }
}

// Example usage
const inventory = new Inventory();

const item1 = new Item("Laptop", 1000, 2);
const item2 = new Item("Mouse", 20, 5);
const item3 = new Item("RAM", 20, 5);
const item4 = new Item("CPU", 20, 5);
const item5 = new Item("GPU", 20, 5);
const item6 = new Item("MOBO", 20, 5);
const item7 = new Item("PSU", 20, 5);

inventory.addItem(item1);
inventory.addItem(item2);
inventory.addItem(item3);
inventory.addItem(item4);
inventory.addItem(item5);
inventory.addItem(item6);
inventory.addItem(item7);

inventory.printInventory();

console.log("Total Inventory Value:", inventory.getInventoryValue());

inventory.removeItem("Mouse");

inventory.printInventory();
console.log(
  "Total Inventory Value after removal:",
  inventory.getInventoryValue(),
);
