const product = {
  id: 1,
  name: "Notebook",
  priceCents: 35000,
  inStock: true,
  tags: ["stationery", "paper"],
  dimensions: { width: 14, height: 21, unit: "cm" },
  describe() {
    return `${this.name} -- KSh ${this.priceCents / 100}`;
  },
};

console.log(product.name);

console.log(product["priceCents"]);

console.log(product.dimensions.width);

console.log(product.describe());

const product2 = { ...product, id: 2, name: "Pen" };

console.log(product2);

function summarise({ name: productName, priceCents, inStock = false }) {
  return `${productName}: ${inStock ? "available" : "out of stock"} at KSh ${priceCents / 100}`;
}

console.log(summarise(product));
console.log(summarise({ name: "Pen", priceCents: 5000 })); // uses default inStock

product2.tags.push("ink");

console.log(product.tags);

const product3 = JSON.parse(JSON.stringify(product));

product2.tags.push("marker");

console.log(product3.tags);
// ["stationery", "paper", "ink"] (unchanged after product3 modification)
//
// TASK 4
const inventory = {};
function addProduct(p) {
  inventory[p.id] = p;
}
function removeProduct(id) {
  if (!inventory[id]) {
    throw new Error(`Product with id ${id} does not exist`);
  }
  delete inventory[id];
}
function listProducts() {
  return Object.values(inventory);
}

addProduct({ id: 1, name: "Notebook", priceCents: 350, quantity: 2 });
addProduct({ id: 2, name: "Pen", priceCents: 50, quantity: 5 });
addProduct({ id: 3, name: "Pencil", priceCents: 30, quantity: 8 });

console.log("List products: ", listProducts());

console.log("Keys: ", Object.keys(inventory));

removeProduct(3);

console.log(Object.entries(inventory));

// Extra Credit

function calculateTotal(inventory) {
  return Object.values(inventory).reduce((total, item) => {
    return total + item.priceCents * item.quantity;
  }, 0);
}

console.log(calculateTotal(inventory));

const total = calculateTotal(inventory);

console.log("Total:", total);

// freeze object
const product5 = Object.freeze({
  id: 4,
  name: "Eraser",
  priceCents: 2000,
});

product5.name = "Mohamed";

console.log(product5);

const key = "name";
const obj = { [key]: "Notebook" };

console.log(obj[key]);

// ai audit (4) accept - test
// console.log(removeProduct(5)); // Product with id 5 does not exist
