# 💰 Expense Tracker

A simple and intuitive expense tracking application built with vanilla JavaScript that helps you manage your income and expenses efficiently. All data is stored locally in your browser using localStorage, ensuring your financial information stays private.

## ✨ Features

- **Add Transactions** - Record income and expenses with descriptions, amounts, and dates
- **View Transactions** - Display all transactions in an organized list
- **Edit Transactions** - Modify existing transactions to correct mistakes
- **Delete Transactions** - Remove transactions you no longer need
- **Real-time Analytics** - View total income, total expenses, and remaining balance
- **Local Storage** - All data is saved in your browser (no server required)
- **Responsive Design** - Works seamlessly on desktop and mobile devices

## 📁 Project Structure

```
├── index.html          # Main HTML file with form and UI
├── app.js              # Main application entry point
├── state.js            # State management and localStorage functions
├── create.js           # Create (add) transaction functionality
├── read.js             # Read and display transactions
├── update.js           # Update transaction functionality
├── analytics.js        # Calculate and display financial statistics
├── style.css           # Styling for the application
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation

1. Clone or download this repository:
```bash
git clone <repository-url>
cd Expense-Tracker-CRUD-localStorage
```

2. Open `index.html` in your web browser:
```bash
# Using a simple Python server (Python 3)
python -m http.server 8000

# Or open directly
open index.html
```

3. Navigate to `http://localhost:8000` in your browser

## 💡 How to Use

### Adding a Transaction
1. Fill in the transaction form with:
   - **Description**: What is the transaction for (e.g., "Salary", "Groceries")
   - **Amount**: Transaction amount in rupees
   - **Type**: Select "Income" or "Expense"
   - **Date**: Select the transaction date
2. Click "Add Transaction"
3. The transaction will appear in the list below and statistics will update

### Viewing Transactions
- All transactions are displayed in the "Transactions" section
- Each transaction shows description, amount, type, and date

### Editing a Transaction
1. Click the "Edit" button on any transaction
2. Modify the transaction details in the form
3. Click "Update Transaction" to save changes

### Deleting a Transaction
1. Click the "Delete" button on any transaction
2. The transaction will be removed immediately

### Viewing Statistics
- **Income**: Total sum of all income transactions
- **Expenses**: Total sum of all expense transactions
- **Balance**: Income minus Expenses

## 🛠️ Technology Stack

- **HTML5** - Markup structure
- **CSS3** - Styling and responsive design
- **JavaScript (ES6+)** - Application logic with modules
- **localStorage API** - Client-side data persistence

## 📊 Data Storage

All transactions are stored in your browser's localStorage under the key `transactions`. Each transaction is stored as a JSON object with:
- `id`: Unique identifier
- `description`: Transaction description
- `amount`: Transaction amount
- `type`: "income" or "expense"
- `date`: Transaction date

## 🔒 Privacy & Security

- All data is stored locally on your device
- No data is sent to any server
- No account or login required
- Clear your browser data to delete all transactions

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📝 License

This project is open source and available under the MIT License.

## 📧 Support

For issues or questions, please open an issue in the repository.

---

**Happy expense tracking! 💸**
