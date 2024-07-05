import { PUBLIC_USERFRONT_ACCOUNT_ID, PUBLIC_USERFRONT_PUBLIC_KEY_BASE64, PUBLIC_KEY_ID, PUBLIC_KEY_SECRET } from '$env/static/public';
import Razorpay from 'razorpay';


export default async function createOrder(options) {
    
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