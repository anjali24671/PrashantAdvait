import connect from '$lib/database/connection'
import Orders from '$lib/database/Orders'

export async function POST({ request }) {
   
    const data = await request.json()
    try {
        // Orders to add
        let document = {}

        if (!data.order_number || !data.user_id || !data.amount || !data.scholarshipAmount || !data.netAmount || !data.quantity || !data.status || !data.paymentStatus || !data.paymentType || !data.paymentTransactionId) {
            throw new Error("please fill all details")           
        }

        document['order_number'] = data.order_number
        document['user_id'] = data.user_id
        document['amount'] = data.amount
        document['scholarshipAmount'] = data.scholarshipAmount
        document['netAmount'] = data.netAmount
        document['quantity'] = data.quantity
        if(data.status) document['status'] = data.status
        if(data.paymentStatus) document['paymentStatus'] = data.paymentStatus
        document['paymentType'] = data.paymentType
        document['paymentTransactionId'] = data.paymentTransactionId

        await connect()

        // add the Orders to collection
        const newOrders = await Orders.create(document)

        return new Response(JSON.stringify(
            { success: true, message: "Orders added succesfully" }
        ))
    } catch (e) {
        return new Response(JSON.stringify(
            {status: 401, message: e.message}
        ))
    }
   
}
