import connect from '$lib/database/connection'
import Carts from '$lib/database/Carts'

export async function POST({ request }) {
   
    const data = await request.json()
    try {
        // cart to add
        let document = {}
        
        if (!data.user_id || !data.type ) {
            throw new Error("please fill all details")           
        }

        document['user_id'] = data.user_id
        document['type'] = data.type
        if (data.product_id) {
            document['product_id'] = data.product_id
            document['quantity'] = data.quantity || 1  // default quantity is 1 if not provided in the request
        }


        await connect()

        // add the Cart to collection
        const newCart =await Carts.create(document)

        return new Response(JSON.stringify(
            { success: true, message: "Cart added succesfully" }
        ))
    } catch (e) {
        return new Response(JSON.stringify(
            {status: 401, message: e.message}
        ))
    }
   
}



export async function GET({ url }) {
    const query = url.searchParams.get('query');
    const user_id = (url.searchParams.get('user_id'))
   
    try {
        await connect(); // Establish MongoDB connection
        
        const userCart = await Carts.find({"user_id":user_id})
       
        
        return new Response(JSON.stringify(userCart));


    } catch (error) {
        console.error('Error fetching user cart:', error);
        return new Response(JSON.stringify({ status: 401, message: error.message }), {
            headers: {
                'Content-Type': 'application/json'
            },
            status: 401
        });
    }
}








