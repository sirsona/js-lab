s -> SavingAccount.prototype -> BankAccount.prototype -> Object.prototype ->
null

- `s` -> class instance
- `SavingAccount.prototype` -> methods specific to `SavingAccount` class
- `BankAccount.prototype` -> shared methods (e.g `deposit`, `withdraw`,
  `balance`)
- `Object.prototype` -> build in JS methods (`toString`)
- `null` -> end of lookup chain
