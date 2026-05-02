export class BankAccount {
    // #balance;
    constructor(owner, openingBalance = 0) {
        this._owner = owner;
        this.balanceCents = openingBalance;
        this.transactions = [];
    }

    deposit(amountCents) {
        this.balanceCents += amountCents;
        this.transactions.push({ type: "deposit", amountCents });
    }

    withdraw(amountCents) {
        if (amountCents > this.balanceCents) {
            throw new Error("Insufficient Funds");
        }

        this.balanceCents -= amountCents;
        this.transactions.push({ type: "withdraw", amountCents });
    }

    get balance() {
        return this.balanceCents;
    }
    set owner(newName) {
        this._owner = newName;
    }
    get owner() {
        return this._owner;
    }

    static minimumOpeningBalance() {
        return 1_000;
    }

    history() {
        if (!this.transactions?.length) {
            return "No transaction yet.";
        }
        return this.transactions
            ?.map((t, index) => {
                return `${index + 1}. ${t.type.toUpperCase()} - KES ${t.amountCents}`;
            })
            .join("\n");
    }
}

const account = new BankAccount("Doe", 100_000);
account.deposit(50_000);
account.withdraw(30_000);
account.withdraw(30_000);

console.log(account.balance);

console.log(account.transactions);

console.log(account.owner);

console.log((account.owner = "John"));
console.log(account.owner);

console.log(account.history());

