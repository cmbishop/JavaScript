var account = {
	balance: 0
};

//deposit 
function deposit (account, amount) {
	account.balance += amount;
}

//withdraw
function withdraw (account, amount) {
	account.balance -= amount;
}

//get balance
function getBalance (account) {
	return account.balance;
}



