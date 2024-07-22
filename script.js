// script.js

const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Get all price element
    const prices = document.querySelectorAll('.price');
    let total = 0;

    // Sum up the values
    prices.forEach(priceElement => {
        total += parseFloat(priceElement.textContent) || 0;
    });

    // Check if the total row already exists
    let totalRow = document.querySelector('#totalRow');
    if (totalRow) {
        totalRow.querySelector('.total-price').textContent = total;
    } else {
        // Create a new row for total price
        const table = document.querySelector('table');
        const newRow = document.createElement('tr');
        newRow.id = 'totalRow';
        newRow.innerHTML = `<td>Total Price</td><td class="total-price">${total}</td>`;
        table.appendChild(newRow);
    }
};

getSumBtn.addEventListener("click", getSum);
