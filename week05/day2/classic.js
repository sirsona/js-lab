class BankAcc {
  #balance;
  constructor(owner, openingBalance = 0) {
    this._owner = owner;
    this.#balance = openingBalance;
    this.transactions = [];
  }

  deposit(amount) {
    this.#balance += amount;
    this.transactions.push({ type: "deposit", amount });
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      return new Error("Insufficient Funds");
    }

    this.#balance -= amount;
    this.transactions.push({ type: "withdraw", amount });
  }

  get balance() {
    return this.#balance;
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
        return `${index + 1}. ${t.type.toUpperCase()} - KES ${t.amount}`;
      })
      .join("\n");
  }
}

const account = new BankAcc("Doe", 100_000);
account.deposit(50_000);
account.withdraw(30_000);
account.withdraw(30_000);

console.log(account.balance);

console.log(account.transactions);

console.log(account.owner);

console.log((account.owner = "John"));
console.log(account.owner);

console.log(account.history());