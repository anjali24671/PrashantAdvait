import connect from '$lib/database/connection'
import EBookContents from '$lib/database/EBookContents'

export async function POST({ request }) {
   
    const data = await request.json()
    try {
        // EBookContents to add
        let document = {}

        if (!data.EBookId || !data.content) {
            throw new Error("please fill all details")           
        }

        document['EBookId'] = data.EBookId
        document['content'] = data.content

        await connect()

        // add the EBookContents to collection
        const newEBookContents = await EBookContents.create(document)

        return new Response(JSON.stringify(
            { success: true, message: "EBookContents added succesfully" }
        ))
    } catch (e) {
        return new Response(JSON.stringify(
            {status: 401, message: e.message}
        ))
    }
   
}
