import { PUBLIC_USERFRONT_ACCOUNT_ID, PUBLIC_USERFRONT_PUBLIC_KEY_BASE64, PUBLIC_KEY_ID, PUBLIC_KEY_SECRET } from '$env/static/public';


async function loadRazorpayScript() {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => reject(new Error('Failed to load Razorpay script.'));
      document.body.appendChild(script);
    });
}
  

export default async function initializeRazorpay() {
  try {
    const loaded = await loadRazorpayScript();
    if (loaded) {
      paymentOptions.order_id = data.order_data;
      // paymentOptions.amount = data.order_data.amount;
      // paymentOptions.currency = data.order_data.currency;
      let rzp1
      rzp1 = new Razorpay(paymentOptions);
      // razorpayScriptLoaded.set(true);
      return {rzp1, "loaded":true}

    }
  } catch (error) {
    console.error(error.message);
  }
}