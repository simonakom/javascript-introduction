// Write a JavaScript program that creates a class
// called "BankAccount" with properties for account number
// and balance. Include methods to deposit and withdraw
// money from the account. Create some instances of the
// "BankAccount" class, deposit some money, and withdraw
// a portion of it.


class BankAccount {
    #balance; //privatus laukas, matomas/koreguojamas tik klaseje
    constructor(accountNumber) { 
        this.accountNumber = accountNumber; 
        this.#balance = 0
    }
    deposit(amount) {
        this.#balance += amount
    }
    withdraw(amount) {
        if (amount > this.#balance)
        console.log("Not enough funds. Current account amount:  " + this.#balance);
        else this.#balance -= amount 
    }
    //Encapsulation: nustato galimybe gauti, matyti balance (GETTER- read obly property)
    get balance(){ //inkapsuliuos balance gavima funkcijoje tokiu budu matomas "myBankAccount.deposit(400);"
        return this.#balance; // gaunamas privatus laukas
    }
}

const myBankAccount = new BankAccount ("548962354345");
//negalima redaguoti uz klases ribu nes nenustatymas leidimas redaguoti #balance
// myBankAccount.balance += 400;
// myBankAccount.balance -= 350;

//funcitons: veikia su privaciais laukais jei yra getter
myBankAccount.deposit(400);
myBankAccount.withdraw(390);
// myBankAccount.accountNumber; //accountNumber siioje vietoje savybe/property o virsuje laukas

console.log(myBankAccount.balance);