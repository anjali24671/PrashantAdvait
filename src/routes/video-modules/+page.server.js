import VideoCategories from "$lib/database/VideoCategories";
import VideoSeries from "$lib/database/VideoSeries";
import connect from "$lib/database/connection";

export async function load() {
    try {
        await connect()
        const videoCategoriesResponse = await VideoCategories.find()
        
        let VideoCategoriesData = new Object()

        for (let videoCategory of videoCategoriesResponse) {
            const subCategory = await VideoSeries.find({ category_id: videoCategory._id }, { title: 1, language: 1, photoURL:1 })
            VideoCategoriesData[videoCategory.name] = subCategory
            // console.log(videoCategory._id)
        }

        const VideoCategoriesDataJSON = JSON.stringify(VideoCategoriesData);

        return {
            VideoCategoriesDataJSON
        };
        
    } catch (err) {
        return new Response({status: 404, message: err.message})
    }
}