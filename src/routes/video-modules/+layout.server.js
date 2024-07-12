import VideoCategories from "$lib/database/VideoCategories";
import connect from "$lib/database/connection";

export async function load() {
    try {
        await connect()
        const videoCategoriesResponse = await VideoCategories.find()

        const videoCategories = JSON.stringify(videoCategoriesResponse);
        console.log(videoCategories)

        return {
            videoCategories
        };
        
    } catch (err) {
        return new Response({status: 404, message: err.message})
    }
}