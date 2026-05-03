// Task 1: Rewrite the countdown with async/await

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function countdown() {
  for (let i = 1; i <= 5; i++) {
    await wait(1000);
    console.log(i);
  }
}

// countdown()

// Task 2: try/catch with async
// rewrite divide  day 2

function divide(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject(new Error("Cannot divide by Zero"));
      return;
    }
    resolve(a / b);
  });
}

async function safeDivide(a, b) {
  try {
    const result = await divide(a, b);
    console.log(result);
  } catch (err) {
    console.log("Error", err.message);
  }
}

safeDivide(10, 2);
safeDivide(10, 0);

// Task 3: Sequential vs parallel awaits
async function sequential() {
  const start = Date.now();
  const a = await wait(1000).then(() => "a");
  const b = await wait(1000).then(() => "b");
  const c = await wait(1000).then(() => "c");
  console.log(`Sequential: ${Date.now() - start}ms`, [a, b, c]);
}

async function parallel() {
  const start = Date.now();
  const [a, b, c] = await Promise.all([
    wait(1000).then(() => "a"),
    wait(1000).then(() => "b"),
    wait(1000).then(() => "c"),
  ]);
  console.log(`Parallel ${Date.now() - start}ms`, [a, b, c]);
}

// sequential();
// parallel();

// Task 4: async function returns a Promise

async function getValue() {
  return 42;
}

const result = getValue();
console.log(result);

console.log(result instanceof Promise);

result.then((v) => console.log(v));

// top-level await

const res = await getValue().then((v) => console.log(v));

