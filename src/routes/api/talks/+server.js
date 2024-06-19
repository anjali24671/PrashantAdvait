import connect from '$lib/database/connection'
import Talks from '$lib/database/Talks'

export async function POST({ request }) {
    const data = await request.json()
    try {
        // talks to add
        let document = {}
        if (!data.institute_name || !data.date || !data.posterURL) {
            throw new Error("please fill all details")
        }
        document['institute_name'] = data.institute_name
        document['date'] = data.date
        document['posterURL'] = data.posterURL
        
        await connect()

        // add the talks
        const newTalks = await Talks.create(document)

        return new Response(JSON.stringify(
            { success: true, message: `talk with ${data.institute_name} added succesfully` }
        ))
    } catch (e) {
        return new Response(JSON.stringify(
            { status: 401, message: e.message }
        ))
    }

}
