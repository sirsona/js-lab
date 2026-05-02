import { BankAccount } from '../account/BankAccount.js';

export class SavingsAccount extends BankAccount {
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

// const s = new SavingsAccount("Wanjiru", 500000, 0.08);
// s.deposit(100000);
// s.addInterest();
// console.log(s.balanceCent)


// console.log(s.transactions);





