export class BankAccount {
  #balanceCents;
  constructor(owner, openingBalance = 0) {
    this._owner = owner;
    this.#balanceCents = openingBalance;
    this.transactions = [];
  }

  // validate
  _validateAmount(amountCents) {
    if (!Number.isInteger(amountCents) || amountCents <= 0) {
      throw new Error("Amount must be a positive integer");
    }
  }

  deposit(amountCents) {
    this._validateAmount(amountCents);
    this.#balanceCents += amountCents;
    this.transactions.push({
      type: "deposit",
      amountCents,
      date: new Date().toLocaleString(),
    });
  }

  withdraw(amountCents) {
    this._validateAmount(amountCents);
    if (amountCents > this.#balanceCents) {
      throw new Error("Insufficient Funds");
    }

    this.#balanceCents -= amountCents;
    this.transactions.push({
      type: "withdraw",
      amountCents,
      date: new Date().toLocaleString(),
    });
  }

  get balance() {
    return this.#balanceCents / 100;
  }
  set owner(newName) {
    this._owner = newName.charAt(0).toUpperCase() + newName.slice(1);
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

// task 4

//const account2 = BankAccount("Joe", 50_000);
// console.log(account2); // Class constructor BankAccount cannot be invoked without 'new'

console.log((account.owner = "hussein"));

console.log(account);

// ai improvement
account.balanceCents = -999999;
