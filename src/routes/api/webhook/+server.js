import connect from '$lib/database/connection.js'
import Users from '$lib/database/Users.js'

export async function POST({ request }) {
   
    try {
        const data = await request.json()
        console.log(data.record.userUuid)

        // add the userfront ID to User table, in order to map the two.
        await connect()
        const userResponse = await Users.create({ userFront_id: data.record.userUuid })
        console.log(userResponse)
        
        return new Response(JSON.stringify(
            { status: 200, userResponse }
        ))

    } catch (e) {
        return new Response(JSON.stringify(
            { status: 401, message: e.message }
        ), { status: 401 })
    }
    
   
}
