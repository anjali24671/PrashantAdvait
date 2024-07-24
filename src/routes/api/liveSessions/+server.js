import connect from '$lib/database/connection'
import LiveSessions from '$lib/database/LiveSessions'

export async function POST({ request }) {
   
    const data = await request.json()
    try {
        // LiveSessions to add
        let document = {}

        if (!data.name || !data.language || !data.date || !data.type ) {
            throw new Error("please fill all details")           
        }

        document['name'] = data.name
        document['language'] = data.language
        document['date'] = data.date
        document['type'] = data.type
        
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




export async function GET({ url }) {
    const month = await url.searchParams.get('month')

    try {
        await connect()

        const sessions = await LiveSessions.find({
            $expr: { $eq: [{ $month: "$date" }, month] }
        });
                
        return new Response(JSON.stringify(sessions));


    } catch (error) {
        console.error('Error fetching sessions:', error);
        return new Response(JSON.stringify({ status: 401, message: error.message }), {
            headers: {
                'Content-Type': 'application/json'
            },
            status: 401
        });
    }
}







