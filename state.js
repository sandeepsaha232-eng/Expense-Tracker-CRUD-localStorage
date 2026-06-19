export const state = {
    transactions: [],
    editingId: null
};

export const form = document.getElementById('transactionForm');
export const descriptionInput = document.getElementById('description');
export const amountInput = document.getElementById('amount');
export const typeInput = document.getElementById('type');
export const dateInput = document.getElementById('date');
export const transactionList = document.getElementById('transactionList');
export const submitBtn = form.querySelector('button[type="submit"]');

export function loadTransactionsFromStorage() {
    const storedData = localStorage.getItem('transactions');
    if (storedData) {
        state.transactions = JSON.parse(storedData);
    } else {
        state.transactions = [];
    }
}

export function saveTransactionsToStorage() {
    localStorage.setItem('transactions', JSON.stringify(state.transactions));
}