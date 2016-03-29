var accounts = [];

//Account Object
//balance
//username

//createAccount(account)
function createAccount (account) {
//push to account array	
	accounts.push(account);
//return account
	return account;
}

//getAccount(username)
function getAccount (username) {
//find matching accounts using forEach
	var matchedAccount;

	accounts.forEach(function (account)	{
		if (account.username === username) {
			matchedAccount = account;
		}
	});

	return matchedAccount;
}

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

//testing
// var mattsAccount = createAccount({
// 	username: 'Matt',
// 	balance: 0
// });

// deposit(mattsAccount, 100);
// console.log(getBalance(mattsAccount));

// withdraw(mattsAccount, 11);
// console.log(getBalance(mattsAccount));

// var existingAccount = getAccount('Matt');
// console.log(getBalance(mattsAccount));

// console.log(accounts);