import connect from '$lib/database/connection'
import Donations from '$lib/database/Donations'

export async function POST({ request }) {
   
    const data = await request.json()
    try {
        // Donation to add
        let document = {}

        if (!data.user_id || !data.amount) {
            throw new Error("please fill all details")           
        }

        document['user_id'] = data.user_id
        document['amount'] = data.amount

        await connect()

        // add the Donations to collection
        const newDonation = await Donations.create(document)

        return new Response(JSON.stringify(
            { success: true, message: "Donations added succesfully" }
        ))
    } catch (e) {
        return new Response(JSON.stringify(
            {status: 401, message: e.message}
        ))
    }
   
}
