import connect from '$lib/database/connection'
import Carts from '$lib/database/Carts'

export async function POST({ request }) {
   
    const data = await request.json()
    try {
        // cart to add
        let document = {}
        
        if (!data.user_id || !data.product_id || !data.price) {
            throw new Error("please fill all details")           
        }

        document['user_id'] = data.user_id
        document['product_id'] = data.product_id
        document['price'] = data.price

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
