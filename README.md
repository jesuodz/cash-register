# cash-register

Cash register algorithm project made for freeCodeCamp.

## Problem description

Design a cash register drawer function `checkCashRegister()` that accepts purchase price as the first argument `price`, payment as the second argument `cash`, and cash-in-drawer `cid` as the third argument. `cid` is a 2D array listing available currency.

## Requirements
* The `checkCashRegister()` function should always return an object with a status `key` and a `change` key.
* It should return `{status: "INSUFFICIENT_FUNDS", change: []}` if cash-in-drawer is less than the change due, or if you cannot return the exact change.
* It should return `{status: "CLOSED", change: [...]}` with cash-in-drawer as the value for the key `change` if it is equal to the change due.
* Otherwise, it should return `{status: "OPEN", change: [...]}`, with the change due in coins and bills, sorted in highest to lowest order, as the value of the `change` key.

## To try it
Run `npm start "19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]"` or whatever you'd like to test!.