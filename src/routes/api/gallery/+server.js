import connect from '$lib/database/connection'
import Gallery from '$lib/database/Gallery'

export async function POST({ request }) {
    const data = await request.json()
    try {
        // image to add
        let document = {}
        if (!data.imageURL) {
            throw new Error("imageURL is required")
        }
        document['imageURL'] = data.imageURL
        
        await connect()

        // add the image to collection
        const newGallery =await Gallery.create(document)

        return new Response(JSON.stringify(
            { success: true, message: `image ${data.name} added succesfully` }
        ))
    } catch (e) {
        return new Response(JSON.stringify(
            { status: 401, message: e.message }
        ))
    }

}
