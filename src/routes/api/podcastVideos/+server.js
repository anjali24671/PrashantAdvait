import connect from '$lib/database/connection'
import PodcastVideos from '$lib/database/PodcastVideos'

export async function POST({ request }) {
   
    const data = await request.json()
    try {
        // PodcastVideos to add
        let document = {}

        if (!data.name || !data.videoURL) {
            throw new Error("please fill all details")           
        }

        document['name'] = data.name
        document['videoURL'] = data.videoURL

        await connect()

        // add the PodcastVideos to collection
        const newPodcastVideos = await PodcastVideos.create(document)

        return new Response(JSON.stringify(
            { success: true, message: "PodcastVideos added succesfully" }
        ))
    } catch (e) {
        return new Response(JSON.stringify(
            {status: 401, message: e.message}
        ))
    }
   
}
