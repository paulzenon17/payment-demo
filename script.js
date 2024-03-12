// Function to handle dropdown button click
document.querySelectorAll('.dropdown-btn').forEach(item => {
    item.addEventListener('click', event => {
        const dropdownContent = item.nextElementSibling;
        dropdownContent.classList.toggle('show');
    });
});

// Function to handle payment
function payNow(paymentMethod) {
    // Open a new tab with payment successful message
    const paymentWindow = window.open('', '_blank');
    paymentWindow.document.write('<html><head><title>Payment Status</title></head><body>');
    paymentWindow.document.write('<img src="icon.jpg" width="300px" height="300px">');
    paymentWindow.document.write('<h2>$----Payment Successful----$</h2>');
    paymentWindow.document.write('<p>Your ' + paymentMethod + ' payment was successful.</p>');
    paymentWindow.document.write('</body></html>');
    paymentWindow.document.close();
}
