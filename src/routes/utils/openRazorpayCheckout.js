
  
export default function openRazorpayCheckout(rzp1) {
    if (rzp1) {
        
        rzp1.open();
        event.preventDefault();
    } else {
        console.error('Razorpay instance is not initialized.');
    }
}