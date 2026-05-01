# Inheritance vs composition trade-off

Inheritance is best when there is a true “is-a” relationship and the child
naturally shares and extends the behavior of the parent. For example, a
`SavingsAccount` is a `BankAccount` because it supports deposits, withdrawals,
and balance, but adds interest logic.

Composition is better when the relationship is “has-a” or when behavior should
be more flexible and loosely coupled. A `LoanAccount` is not really a type of
`BankAccount` because it represents debt, not stored funds, and follows
different rules (interest , repayment period, no normal withdrawals).
