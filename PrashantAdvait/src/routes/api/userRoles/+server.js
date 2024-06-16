import connect from '$lib/database/connection'
import UserRoles from '$lib/database/UserRoles'

export async function POST({ request }) {
   
    const data = await request.json()
    try {
        // userRole to add
        let document = {}

        if (!data.role_name || !data.created_at) {
            console.log("add all details")
            throw new Error("please fill all details")
        }

        document['role_name'] = data.role_name
        document['created_at'] = data.created_at
        if (data.updated_at) document['updated_at'] = data.updated_at        

        await connect()

        // add the UserRoles to collection
        const newUserRole = await UserRoles.create(document)

        return new Response(JSON.stringify(
            { success: true, message: "UserRoles added succesfully" }
        ))
    } catch (e) {
        return new Response(JSON.stringify(
            {status: 401, message: e.message}
        ))
    }
   
}
