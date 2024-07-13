import VideoCategories from "$lib/database/VideoCategories";
import VideoSeries from "$lib/database/VideoSeries";
import connect from "$lib/database/connection";

export async function load({params}) {
    try {
        await connect()
        const videoSeriesRes = await VideoSeries.find({ category_id: params.category_id }, { title: 1, language: 1, photoURL: 1 })
     
        const videoSeries = JSON.stringify(videoSeriesRes)

        return {
            videoSeries
        }
    

    } catch (err) {
        return new Response({status: 404, message: err.message})
    }
}