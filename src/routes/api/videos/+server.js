import connect from '$lib/database/connection'
import Videos from '$lib/database/Videos'

export async function POST({ request }) {
   
    const data = await request.json()
    try {
        // userRole to add
        let document = {}

        if (!data.name || !data.videoURL || !data.videoSeriesId || !data.index || !data.references ||!data.price ||!data.duration) {
            console.log("add all details")
            throw new Error("please fill all details")
        }

        document['name'] = data.name
        document['videoURL'] = data.videoURL
        document['videoSeriesId'] = data.videoSeriesId
        document['index'] = data.index
        document['references'] = data.references
        document['price'] = data.price
        document['duration'] = data.duration
        if (data.status) document['status'] = data.status 
        if (data.part) document['part'] = data.part 

        await connect()

        // add the Videos to collection
        const newVideo = await Videos.create(document)

        return new Response(JSON.stringify(
            { success: true, message: "Videos added succesfully" }
        ))
    } catch (e) {
        return new Response(JSON.stringify(
            {status: 401, message: e.message}
        ))
    }
   
}
