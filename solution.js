function checkVariable(input) {
  if (input === null) return "object";
  switch (typeof input) {
    case "string":
    case "number":
    case "boolean":
    case "bigint":
    case "undefined":
      return typeof input;
    case "object":
      return "object";
    default:
      return "unknown";
  }
}
console.log("Variable Type:", checkVariable("Hello World"));

function generateIDs(count) {
  const ids = [];
  for (let i = 0; i < count; i++) {
    if (i === 5) continue;
    ids.push(`ID-${i}`);
  }
  return ids;
}
console.log("Generated IDs:", generateIDs(8));

function calculateTotal(...numbers) {
  return numbers.reduce((acc, curr) => {
    if (typeof curr !== "number") {
      throw new TypeError("Invalid input: All arguments must be numbers");
    }
    return acc + curr;
  }, 0);
}
console.log("Total sum:", calculateTotal(10, 20, 30));

function getTopScorers(playerList) {
  return playerList
    .filter(player => player.score > 8)
    .map(player => player.name)
    .join(", ");
}

const players = [
  { name: "Alice", score: 10 },
  { name: "Bob", score: 5 },
  { name: "Charlie", score: 12 },
  { name: "Diana", score: 7 }
];
console.log("Top Scorers:", getTopScorers(players));

class Item {
  #discount = 0.1;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  get finalPrice() {
    return this.price - (this.price * this.#discount);
  }
}
const myItem = new Item("Laptop", 1000);
console.log(`Item: ${myItem.name}, Final Price: ${myItem.finalPrice}`);

function safeDivide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  } catch (error) {
    return error.message;
  } finally {
    console.log("Operation attempted");
  }
}
console.log("Division Result:", safeDivide(10, 0));