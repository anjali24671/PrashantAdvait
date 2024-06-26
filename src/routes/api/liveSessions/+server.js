import connect from '$lib/database/connection'
import LiveSessions from '$lib/database/LiveSessions'

export async function POST({ request }) {
   
    const data = await request.json()
    try {
        // LiveSessions to add
        let document = {}

        if (!data.name || !data.language || !data.date ) {
            throw new Error("please fill all details")           
        }

        document['name'] = data.name
        document['language'] = data.language
        document['date'] = data.date
        
        if (data['status']) document['status'] = data['status']
        if (data['created_at']) document['created_at'] = data['created_at']
        if (data['tags']) document['tags'] = data['tags']

        await connect()

        // add the LiveSessions to collection
        const newLiveSessions = await LiveSessions.create(document)

        return new Response(JSON.stringify(
            { success: true, message: "LiveSessions added succesfully" }
        ))
    } catch (e) {
        return new Response(JSON.stringify(
            {status: 401, message: e.message}
        ))
    }
   
}

