
function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}

// wait(1000).then(() => console.log("1 second passed"));


// wait(1000)
//     .then(() => { console.log(1); return wait(1000) })
//     .then(() => { console.log(2); return wait(1000) })
//     .then(() => { console.log(3); return wait(1000) })
//     .then(() => { console.log(4); return wait(1000) })
//     .then(() => { console.log(5); return wait(1000) })



function divide(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject(new Error("Cannot divide by Zero"))
            return;
        }
        resolve(a / b)
    })
}

// divide(10, 2)
//     .then((result) => console.log("Result:", result))
//     .catch((err) => console.error("Error:", err.message));

// divide(10, 0)
//     .then((result) => console.log("Result:", result))
//     .catch((err) => console.error("Error:", err.message));


const p1 = wait(1000).then(() => "one");
const p2 = wait(2000).then(() => "two");
const p3 = wait(3000).then(() => "three");

Promise.all([p1, p2, p3]).then((results) => {
    console.log("All done:", results);
});
// // All done: [ 'one', 'two', 'three' ]

Promise.race([p1, p2, p3]).then((first) => {
    console.log("First done:", first);
});
// First done: one


const mixed = [
    divide(10, 2),
    divide(10, 0),
    divide(8, 4),
];

Promise.allSettled(mixed).then((results) => {
    results.forEach((r, i) => console.log(i, r.status, r.value ?? r.reason.message));
});