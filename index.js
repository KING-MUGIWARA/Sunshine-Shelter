// Progress Bar
const targetAmount = 10000000; // 10 million NGN target
let currentAmount = 0;

function updateProgress(amount) {
    currentAmount += amount;
    const progressPercentage = (currentAmount / targetAmount) * 100;
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    progressBar.style.width = progressPercentage + '%';
    progressText.innerText = `${currentAmount.toLocaleString()} NGN of ${targetAmount.toLocaleString()} NGN raised`;
}

// Initialize Progress Bar
updateProgress(0);

// Handle Paystack Payment
document.getElementById('paystack-button').addEventListener('click', () => {
    const donationAmount = prompt('Enter the amount you wish to donate in NGN:');
    if (donationAmount && !isNaN(donationAmount) && donationAmount > 0) {
        const paymentParams = {
            email: 'abdulmaliksuleiman100@gmail.com',
            amount: donationAmount * 100,
            currency: "NGN",
            callback: function () {
                alert('Thank you for your donation!');
                updateProgress(parseFloat(donationAmount));
                document.getElementById('payment-modal').style.display = 'none';
            },
            onClose: function () {
                alert('Payment closed without completion.');
            }
        };

        PaystackPop.setup({
            key: 'pk_test_717c31979890e580a086b33e5ec399b938a71e54',
            ...paymentParams
        }).openIframe();
    } else {
        alert('Please enter a valid donation amount.');
    }
});

// Modal Functionality
document.getElementById('donate-button').addEventListener('click', () => {
    document.getElementById('payment-modal').style.display = 'block';
});

document.querySelector('.close-button').addEventListener('click', () => {
    document.getElementById('payment-modal').style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('payment-modal')) {
        document.getElementById('payment-modal').style.display = 'none';
    }
});
updateProgress(0);

// Example: Simulate a donation to test the progress bar
setTimeout(() => updateProgress(100000), 2000); // Adds 100,000 NGN after 2 seconds
setTimeout(() => updateProgress(500000), 5000); // Adds 500,000 NGN after 5 seconds
setTimeout(() => updateProgress(1000), 9000);
setTimeout(() => updateProgress(500), 5000); 
setTimeout(() => updateProgress(200), 22000);
setTimeout(() => updateProgress(100), 25000);
setTimeout(() => updateProgress(100), 35000);
setTimeout(() => updateProgress(50), 15000);
setTimeout(() => updateProgress(10), 95000);
setTimeout(() => updateProgress(30), 85000);
setTimeout(() => updateProgress(700), 75000);
setTimeout(() => updateProgress(500), 65000);
setTimeout(() => updateProgress(1000), 55000);
setTimeout(() => updateProgress(5), 32000);
setTimeout(() => updateProgress(57), 31000);
setTimeout(() => updateProgress(107), 42000);
setTimeout(() => updateProgress(2), 2500);
setTimeout(() => updateProgress(1), 30000);
setTimeout(() => updateProgress(500),50000);
setTimeout(() => updateProgress(5000),100000);
setTimeout(() => updateProgress(3), 40000);
setTimeout(() => updateProgress(4), 50000);