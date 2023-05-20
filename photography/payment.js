// payment.js
document.getElementById('upiPaymentButton').addEventListener('click', function() {
    var options = {
      vpa: 'yourmerchantupi@upi', // Replace with your merchant UPI ID
      amount: '10.00', // Replace with the payment amount
      txnId: '12345', // Replace with a unique transaction ID
      currency: 'INR', // Replace with the currency code
      transactionNote: 'Payment for Photography Services', // Replace with your transaction note
      deepLinkUrl: 'upi://pay' // Replace with the URL scheme for your mobile app, if applicable
    };
  
    var payment = new UPI(options);
  
    payment.initiatePayment().then(function(response) {
      // Payment successful
      console.log('Payment successful:', response);
      // Handle the payment success response here (e.g., show a success message to the user)
    }).catch(function(error) {
      // Payment failed or was cancelled
      console.error('Payment failed:', error);
      // Handle the payment failure or cancellation here (e.g., show an error message to the user)
    });
  });
  