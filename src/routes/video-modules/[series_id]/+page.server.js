import VideoSeries from "$lib/database/VideoSeries";
import connect from "$lib/database/connection";

export async function load({ params }) {

    try {
        await connect()

        const series_id = params.series_id
        // find the video series for the given (params) videoCategory
        const videoSeriesResponse = await VideoSeries.find({_id: series_id }) 
        let videoSeries = {}
        videoSeries["videoSeries"] = videoSeriesResponse

        const series = JSON.stringify(videoSeries)

        return {
            series
        }
    } catch (e) {
        return {
            status: 401,
            message: e.message
        };
    }
    
   
}