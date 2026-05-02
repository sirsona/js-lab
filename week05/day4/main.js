
// main.js

import { SavingsAccount } from "./account/index.js";


const s = new SavingsAccount("Wanjiru", 500000, 0.08);
s.deposit(100000);
s.addInterest();
s.balanceCent

s.transcations;


import("./account/index.js").then((mod) => {
    const acc = new mod.BankAccount("John", 100000);
    acc.deposit(50000);
    console.log(acc.balance);
});