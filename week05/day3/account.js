import { BankAccount } from "../day2/classic.js";

class SavingsAccount extends BankAccount {
  constructor(owner, openingBalance, interestRate = 0.05) {
    super(owner, openingBalance);
    this.interestRate = interestRate;
  }

  addInterest() {
    const interest = Math.floor(this.balanceCents * this.interestRate);
    this.balanceCents += interest;
    this.transactions.push({ type: "interest", amountCents: interest });
  }
}

const s = new SavingsAccount("Wanjiru", 500000, 0.08);
s.deposit(100000);
s.addInterest();
console.log(s.balanceCent)

class CurrentAccount extends BankAccount {
  constructor(owner, openingBalance) {
    super(owner, openingBalance);
    this.overdraftLimit = 500000; // KSh 5000 in cents
  }

  withdraw(amountCents) {
    if (amountCents > this.balanceCents + this.overdraftLimit) {
      throw new Error("Overdraft limit exceeded");
    }
    this.balanceCents -= amountCents;
    this.transactions.push({ type: "withdraw", amountCents });
  }
}

console.log(s.transactions);





