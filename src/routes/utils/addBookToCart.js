import { PUBLIC_USERFRONT_ACCOUNT_ID, PUBLIC_USERFRONT_PUBLIC_KEY_BASE64, PUBLIC_KEY_ID, PUBLIC_KEY_SECRET } from '$env/static/public';
import Userfront from '@userfront/toolkit/web-components';

Userfront.init(PUBLIC_USERFRONT_ACCOUNT_ID);
const {user} = Userfront

export default async function addBookToCart(bookData) {
    try {

        // get the user_id from userfront_id
        const res = await fetch(`/api/users?userfront_id=${user.userUuid}`)
        const userObj = await res.json()
        const user_id = userObj.user._id

      

        for(let book of bookData){
            book['user_id'] = user_id

          
            const exists = await fetch('/api/carts')

            
            // // add book to the cart of the above user
            const response = await fetch('/api/carts', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(book),
            });
            
            console.log(await response.json())
        }

        
    } catch (e) { 
        console.error('Error adding book to cart:', e);
    }
}
