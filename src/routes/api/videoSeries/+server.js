import connect from '$lib/database/connection'
import VideoSeries from '$lib/database/VideoSeries'

export async function POST({ request }) {
   
    const data = await request.json()
    try {
        // userRole to add
        let document = {}

        if (!data.category_id || !data.language || !data.title || !data.description || !data.benefits || !data.photoURL) {
            console.log("add all details")
            throw new Error("please fill all details")
        }

        document['category_id'] = data.category_id
        document['language'] = data.language
        document['title'] = data.title
        document['description'] = data.description
        document['benefits'] = data.benefits
        document['photoURL'] = data.photoURL
        
        if (data.status) document['status'] = data.status 
        

        await connect()

        // add the VideoSeries to collection
        const newVideoSeries = await VideoSeries.create(document)

        return new Response(JSON.stringify(
            { success: true, message: "VideoSeries added succesfully" }
        ))
    } catch (e) {
        return new Response(JSON.stringify(
            {status: 401, message: e.message}
        ))
    }
   
}





export async function GET({ url }) {
    const query = url.searchParams.get('query');

    try {
        await connect(); 

        const regex = new RegExp(query, 'i'); // Case-insensitive regex pattern

        let series = []
        if (query) {
            let videoSeries = await VideoSeries.find({ title: { $regex: regex } })
            series.push(videoSeries)
        }
        
        return new Response(JSON.stringify(series));


    } catch (error) {
        console.error('Error fetching Books:', error);
        return new Response(JSON.stringify({ status: 401, message: error.message }), {
            headers: {
                'Content-Type': 'application/json'
            },
            status: 401
        });
    }
}





