import connect from '$lib/database/connection'
import userEnrolledSession from '$lib/database/userEnrolledSession'

export async function POST({ request }) {
   
    const data = await request.json()
    try {
        // userEnrolledSession to add
        let document = {}

        if (!data.user_id || !data.session_name|| data.validity  ){
            throw new Error("please fill all details")           
        }

        document['user_id'] = data.user_id
        document['session_name'] = data.session_name
        document['validity'] = data.validity
       
        

        await connect()

        // add the userEnrolledSession to collection
        const newuserEnrolledSession = await userEnrolledSession.create(document)

        return new Response(JSON.stringify(
            { success: true, message: "userEnrolledSession added succesfully" }
        ))
    } catch (e) {
        return new Response(JSON.stringify(
            {status: 401, message: e.message}
        ))
    }
   
}
