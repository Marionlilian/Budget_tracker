const transactions =[
    {
        id:Date.now(),
        description:'Monthly Salary',
        amount:3500,
        type:'income'

    }
    {
        id:Date.now(),
        decription:'Freelance Writing',
        amount:-500,
        type:'expense'
    }
]

class BudgetTracker{
constructor(){
    this.transactions = this.loadTransactions();
    this.form = document.getElementById('transactionForm');
    this.transactionList = document.getElementById('transactionList');
    this.balanceElement = document.getElementById('balance');

    this.initEventListeners();
    this.renderTransactions();
    this.updateBalance();
}

loadTransactions(){
   console.log(transactions);
    return transactions;
}

initEventListeners(){

}
renderTransactions(){

}
deleteTransactions(id){

}
updateBalance(){

}

}
const budgetTracker = new budgetTracker ()
