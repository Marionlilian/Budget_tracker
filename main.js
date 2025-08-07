
const transactions =[
    {
        id:Date.now(),
        description:'Monthly Salary',
        amount:3500,
        type:'income'

    },
    {
        id:Date.now(),
        description:'Freelance Writing',
        amount:-1500,
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
    return JSON.parse(localStorage.getItem('transactions')) || [];
}
saveTransactions(){
    localStorage.setItem('transactions', JSON.stringify(this.transactions))
}

initEventListeners() {
  this.form.addEventListener('submit', e => {
    e.preventDefault();
    this.addTransaction();
  });
}

addTransaction(){
    const description =document.getElementById('description').value.trim();
    const amount = parseFloat(document.getElementById('amount').value);
    const type =document.getElementById('type').value;

    if(!description || isNaN(amount)){
        alert('Please provide a valid description and amount');
        return;
    }
    const transaction ={
        id:Date.now(),
        description,
        amount: type==='expense'? -amount: amount,
        type
    }
    this.transactions.push(transaction);
    this.saveTransactions();
    this.renderTransactions();
    this.updateBalance();
    this.clearForm();
    
    };
  clearForm() {
  document.getElementById('description').value = "";
  document.getElementById('amount').value = "";
}

renderTransactions(){
    this.transactionList.innerHTML ='';
    this.transactions
    .slice()
    .sort((a, b)=>b.id- a.id)
    .forEach((transactions)=> {
        const transactionDiv =document.createElement('div');
        transactionDiv.classList.add('transaction', transactions.type);
        transactionDiv.innerHTML = `
        <span>${transactions.description}</span>
                <span class="transaction-amount-container">${Math.abs (transactions.amount).toFixed(2)} 
                <span><button class="dltbtn" data-id=${transactions.id}>delete</button></span></span>
        `;
         this.transactionList.appendChild(transactionDiv);

    });

    this.attachDeleteEventListeners();
}
attachDeleteEventListeners(){
    this.transactionList.querySelectorAll('.dltbtn').forEach(button=>{
        button.addEventListener('click', ()=>{
            this.deleteTransactions(Number(button.dataset.id));
        })
     });

}
deleteTransactions(id){
this.transactions = this.transactions.filter(transaction=>transaction.id!==id);

this.saveTransactions();
this.renderTransactions();
this.updateBalance();
};
 

updateBalance(){

}

}
const budgetTracker = new BudgetTracker ();
