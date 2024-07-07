import { PUBLIC_USERFRONT_ACCOUNT_ID, PUBLIC_USERFRONT_PUBLIC_KEY_BASE64, PUBLIC_KEY_ID, PUBLIC_KEY_SECRET } from '$env/static/public';
import Razorpay from 'razorpay';



async function createOrder(options) {
    
    let order_id = ""
    let amount
    let currency=""

    let instance = new Razorpay({ key_id: PUBLIC_KEY_ID, key_secret: PUBLIC_KEY_SECRET })

    instance.orders.create(options, function (err, order) {
        if (err) {
            console.error(err);
            return
        }
        else {
            order_id = order.id
            amount = order.amount
            currency = order.currency
        }
        return order_id
    });
   
    
}



export async function load({ locals }) {
     // data we need form user to make an order 
     let options = {
        amount: 50000,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
    };
    const order_data = await createOrder(options)
 

    if (!locals.auth) return {
        "authenticated": false,
        order_data
    }
    else return {
        "authenticated": true,
        order_data
    }
}


