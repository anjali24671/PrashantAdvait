import connect from '$lib/database/connection'
import OrderShippingAddresses from '$lib/database/OrderShippingAddresses'

export async function POST({ request }) {
   
    const data = await request.json()
    try {
        // OrderShippingAddresses to add
        let document = {}

        if (!data.orderId || !data.shippingAddress || !data.state || !data.city || !data.pincode) {
            throw new Error("please fill all details")           
        }

        document['orderId'] = data.orderId
        document['shippingAddress'] = data.shippingAddress
        document['state'] = data.state
        document['city'] = data.city
        document['pincode'] = data.pincode

        await connect()

        // add the OrderShippingAddresses to collection
        const newOrderShippingAddresses = await OrderShippingAddresses.create(document)

        return new Response(JSON.stringify(
            { success: true, message: "OrderShippingAddresses added succesfully" }
        ))
    } catch (e) {
        return new Response(JSON.stringify(
            {status: 401, message: e.message}
        ))
    }
   
}
