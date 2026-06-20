import { state, form, descriptionInput, amountInput, typeInput, dateInput, saveTransactionsToStorage } from './state.js';
import { displayTransactions } from './read.js';
import { updateTotals } from './analytics.js';

export function handleCreate() {
    const description = descriptionInput.value.trim();
    const amount = parseFloat(amountInput.value);
    const type = typeInput.value;
    const date = dateInput.value;

    if (!description || !amount || amount <= 0) {
        alert('Please fill all fields with valid values');
        return;
    }

    if (!state.editingId) {
        const newTransaction = {
            id: Date.now(),
            description,
            amount,
            type,
            date
        };
        state.transactions.push(newTransaction);
        saveTransactionsToStorage();
        displayTransactions();
        updateTotals();
        form.reset();
        dateInput.value = new Date().toISOString().split('T')[0];
    }
}
