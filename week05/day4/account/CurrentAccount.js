import { BankAccount } from "./BankAccount.js";

export class CurrentAccount extends BankAccount {
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