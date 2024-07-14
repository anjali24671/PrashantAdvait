import connect from '$lib/database/connection.js'
import Users from '$lib/database/Users.js'

// Everytime the user is signed up, userfront sends an automatic POST request to this API.
// we can extract the user details and store them in our database
export async function POST({ request }) {
   
    try {
        const data = await request.json()
       
        // add the userfront ID to User table, in order to map the two.
        await connect()
        const userResponse = await Users.create({ userFront_id: data.record.userUuid })
        
        return new Response(JSON.stringify(
            { status: 200, userResponse }
        ))

    } catch (e) {
        return new Response(JSON.stringify(
            { status: 401, message: e.message }
        ), { status: 401 })
    }
    
   
}
