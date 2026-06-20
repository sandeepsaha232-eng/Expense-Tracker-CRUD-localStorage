import { form, dateInput, loadTransactionsFromStorage } from './state.js';
import { handleCreate } from './create.js';
import { handleUpdate } from './update.js';
import { displayTransactions } from './read.js';
import { updateTotals } from './analytics.js';

document.addEventListener('DOMContentLoaded', () => {
    dateInput.value = new Date().toISOString().split('T')[0];
    loadTransactionsFromStorage();
    displayTransactions();
    updateTotals();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    handleCreate();
    handleUpdate();
});