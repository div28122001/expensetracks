

document.addEventListener("DOMContentLoaded", function() {
    fetchExpenses();
});

function fetchExpenses() {
    fetch('/get_expenses')
        .then(response => response.json())
        .then(data => {
            const expenseList = document.getElementById('expense_list');
            expenseList.innerHTML = '';
            data.expenses.forEach(expense => {
                const listItem = document.createElement('li');
                listItem.textContent = '{{expense.description}}: ${{expense.amount}}';
                expenseList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching expenses:', error);
        });
}