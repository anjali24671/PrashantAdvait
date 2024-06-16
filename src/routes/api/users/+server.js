import connect from '$lib/database/connection'
import Users from '$lib/database/Users'

export async function POST({ request }) {
   
    const data = await request.json()
    try {
        // userRole to add
        let document = {}

        if (!data.role_name || !data.fullname || !data.email || !data.password || !data.phone_number) {
            console.log("add all details")
            throw new Error("please fill all details")
        }

        document['role_name'] = data.role_name
        document['fullname '] = data.fullname 
        document['email '] = data.email 
        document['password '] = data.password 
        document['phone_number '] = data.phone_number 
        if (data.status) document['status'] = data.status        

        await connect()

        // add the Users to collection
        const newuser = await Users.create(document)

        return new Response(JSON.stringify(
            { success: true, message: "Users added succesfully" }
        ))
    } catch (e) {
        return new Response(JSON.stringify(
            {status: 401, message: e.message}
        ))
    }
   
}
