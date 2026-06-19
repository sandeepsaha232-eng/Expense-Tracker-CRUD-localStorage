import { state, saveTransactionsToStorage } from './state.js';
import { displayTransactions } from './read.js';

export function deleteTransaction(transactionId) {
    if (confirm('Are you sure you want to delete this transaction?')) {
        state.transactions = state.transactions.filter(transaction => transaction.id !== transactionId);
        saveTransactionsToStorage();
        displayTransactions();
        updateTotals();
    }
}
window.deleteTransaction = deleteTransaction;

export function updateTotals() {
    const totalIncome = state.transactions
        .filter(transaction => transaction.type === 'income')
        .reduce((sum, transaction) => sum + transaction.amount, 0);

    const totalExpense = state.transactions
        .filter(transaction => transaction.type === 'expense')
        .reduce((sum, transaction) => sum + transaction.amount, 0);

    const balance = totalIncome - totalExpense;

    document.getElementById('totalIncome').textContent = formatCurrency(totalIncome);
    document.getElementById('totalExpense').textContent = formatCurrency(totalExpense);
    document.getElementById('totalBalance').textContent = formatCurrency(balance);
}

export function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).format(amount);
}