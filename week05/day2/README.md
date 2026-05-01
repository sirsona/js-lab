# Class vs Constructor Functions

## Files

- 'classic.js' -> Implementation using ES6 class syntax
- 'constructor.js' -> Implementation using constructor function and prototypes

## Features

- Create bank accounts with an owner and balance
- Deposit and withdraw money
- Track transaction history
- Use getters, setters, and static methods
- Compare class vs constructor function implementations
- Private fields (`#balance`) and prototypes

## Example Usage

```js
const account = new BankAccount("John", 100000);
account.deposit(50000);
account.withdraw(30000);

console.log(account.balance);
console.log(account.history());
```
