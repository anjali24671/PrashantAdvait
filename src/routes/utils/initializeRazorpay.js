import { PUBLIC_KEY_ID } from '$env/static/public';


const paymentOptions = {
    key: PUBLIC_KEY_ID, 
    amount: '50000', // Amount in paise (INR 500)
    currency: 'INR',
    name: 'Prashant Advait',
    description: 'Test Transaction',
    image: 'https://example.com/your_logo',
    order_id: 'order_IluGWxBm9U8zJ8', // This is a sample Order ID
    handler: function (response) {
      console.log('Payment ID:', response.razorpay_payment_id);
      console.log('Order ID:', response.razorpay_order_id);
      console.log('Signature:', response.razorpay_signature);
    },
    prefill: {
      name: 'Gaurav Kumar',
      email: 'gaurav.kumar@example.com',
      contact: '9000090000'
    },
   
    theme: {
      color: '#3399cc'
    }
};
  




export default async function initializeRazorpay() {
    try {
      const loaded = await loadRazorpayScript();
      if (loaded) {
        paymentOptions.order_id = data.order_data;
        // paymentOptions.amount = data.order_data.amount;
        // paymentOptions.currency = data.order_data.currency;
        rzp1 = new Razorpay(paymentOptions);
        //   razorpayScriptLoaded.set(true);
          
        return rzp1

      }
    } catch (error) {
      console.error(error.message);
    }
  }
