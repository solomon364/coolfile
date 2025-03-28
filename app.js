document.addEventListener("DOMContentLoaded", () => {
    const totalSales = document.getElementById("total-sales");
    const newCustomers = document.getElementById("new-customers");
    const orders = document.getElementById("orders");
    const transactionsList = document.getElementById("transactions-list");
    const transactionForm = document.getElementById("transaction-form");
    const customerInput = document.getElementById("customer-name");
    const amountInput = document.getElementById("transaction-amount");

    const salesData = {
        totalSales: 15230,
        newCustomers: 45,
        orders: 120,
        transactions: [
            { customer: "Alice", amount: "$250" },
            { customer: "Bob", amount: "$180" },
            { customer: "Charlie", amount: "$320" }
        ]
    };

    function updateUI() {
        totalSales.textContent = `$${salesData.totalSales}`;
        newCustomers.textContent = salesData.newCustomers;
        orders.textContent = salesData.orders;

        transactionsList.innerHTML = "";
        salesData.transactions.forEach(transaction => {
            const li = document.createElement("li");
            li.textContent = `${transaction.customer} - ${transaction.amount}`;
            transactionsList.appendChild(li);
        });
    }

    transactionForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const customer = customerInput.value.trim();
        const amount = amountInput.value.trim();

        if (customer && amount) {
            salesData.transactions.push({ customer, amount: `$${amount}` });
            salesData.totalSales += parseFloat(amount);
            salesData.orders += 1;
            updateUI();
            customerInput.value = "";
            amountInput.value = "";
        }
    });

    updateUI();
});