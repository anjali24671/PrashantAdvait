import search from '../../utils/search';

export async function load({ url }) {
    
    const query = url.searchParams.get('query')
   
    const videoSeriesData = await search(query, "video_series");
    console.log(videoSeriesData)

    return {
        videoSeriesData
    }
        
}