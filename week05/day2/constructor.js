function BankAccount(owner, openingBalance = 0) {
  this.owner = owner;
  this.balanceCents = openingBalance;
  this.transactions = [];
}

BankAccount.prototype.deposit = function (amountCents) {
  this.balanceCents += amountCents;
  this.transactions.push({ type: "deposit", amountCents });
};

BankAccount.prototype.withdraw = function (amountCents) {
  if (amountCents > this.balanceCents) {
    throw new Error("Insufficient funds");
  }
  this.balanceCents -= amountCents;
  this.transactions.push({ type: "withdraw", amountCents });
};

BankAccount.prototype.getBalance = function () {
  return this.balanceCents / 100;
};

const acc = new BankAccount("Wanjiru", 100000);
acc.deposit(50000);
acc.withdraw(30000);
console.log(acc.getBalance()); // 1200
console.log(acc.transactions);
