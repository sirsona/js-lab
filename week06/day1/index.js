function divide(a, b, callback) {
    if (b === 0) {
        callback(new Error("Cannot divide by zero"), null);
        return;
    }
    callback(null, a / b);
}

divide(10, 2, (err, result) => {
    if (err) {
        console.error("Error:", err.message);
        return;
    }
    console.log("Result:", result);
});

divide(10, 0, (err, result) => {
    if (err) {
        console.error("Error:", err.message);
        return;
    }
    console.log("Result:", result);
});
