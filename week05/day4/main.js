// main.js

import settings from "./account/defaults.js";
import { formatCurrency } from "./account/format.js";
import { SavingsAccount } from "./account/index.js";

const s = new SavingsAccount("Wanjiru", 500000, 0.08);
s.deposit(100000);
s.addInterest();
s.balanceCents;

s.transactions;

import("./account/index.js").then((mod) => {
  const acc = new mod.BankAccount("John", 100000);
  acc.deposit(50000);
  console.log(acc.balance);
});

// formatCurrency

console.log(formatCurrency(25999));

// default.js call

console.log(settings.minBalance);
console.log(settings.interestRate);
