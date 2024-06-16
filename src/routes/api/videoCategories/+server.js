import connect from '$lib/database/connection'
import VideoCategories from '$lib/database/VideoCategories'

export async function POST({ request }) {
   
    const data = await request.json()
    try {
        // userRole to add
        let document = {}

        if (!data.name) {
            console.log("add all details")
            throw new Error("please fill all details")
        }

        document['name'] = data.name
        if (data.status) document['status'] = data.status        

        await connect()

        // add the VideoCategories to collection
        const newVideCategories = await VideoCategories.create(document)

        return new Response(JSON.stringify(
            { success: true, message: "VideoCategories added succesfully" }
        ))
    } catch (e) {
        return new Response(JSON.stringify(
            {status: 401, message: e.message}
        ))
    }
   
}
