// Function to calculate the total price
function calculateTotal() {
    let total = 0;
    const selects = document.querySelectorAll('select');
    
    // Sum up the selected values
    selects.forEach(select => {
        const selectedValue = parseFloat(select.value);
        if (!isNaN(selectedValue)) {
            total += selectedValue;
        }
    });
    
    // Display the total price
    const totalPrice = document.getElementById('total-price');
    totalPrice.textContent = `₹${total}`;
}

// Attach event listeners to each select dropdown
document.querySelectorAll('select').forEach(select => {
    select.addEventListener('change', calculateTotal);
});

// Initial total price calculation
calculateTotal();

document.getElementById('proceedButton').addEventListener('click', function () {
    alert('Thank you for your purchase! Your order has been successfully placed. This is a demo');
});