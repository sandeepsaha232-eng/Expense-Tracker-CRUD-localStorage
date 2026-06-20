import { state, form, descriptionInput, amountInput, typeInput, dateInput, submitBtn, saveTransactionsToStorage } from './state.js';
import { displayTransactions } from './read.js';
import { updateTotals } from './analytics.js';

export function editTransaction(transactionId) {
    const transaction = state.transactions.find(t => t.id === transactionId);
    if (transaction) {
        descriptionInput.value = transaction.description;
        amountInput.value = transaction.amount;
        typeInput.value = transaction.type;
        dateInput.value = transaction.date;
        state.editingId = transactionId;
        submitBtn.textContent = 'Update Transaction';
        form.scrollIntoView({ behavior: 'smooth' });
        descriptionInput.focus();
    }
}
window.editTransaction = editTransaction;

export function handleUpdate() {
    if (state.editingId) {
        const transactionIndex = state.transactions.findIndex(t => t.id === state.editingId);
        if (transactionIndex !== -1) {
            state.transactions[transactionIndex] = {
                id: state.editingId,
                description: descriptionInput.value.trim(),
                amount: parseFloat(amountInput.value),
                type: typeInput.value,
                date: dateInput.value
            };
        }
        state.editingId = null;
        submitBtn.textContent = 'Add Transaction';
        saveTransactionsToStorage();
        displayTransactions();
        updateTotals();
        form.reset();
        dateInput.value = new Date().toISOString().split('T')[0];
    }
}
