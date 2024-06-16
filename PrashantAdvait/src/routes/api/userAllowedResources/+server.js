import connect from '$lib/database/connection'
import UserAllowedResources from '$lib/database/UserAllowedResources'

export async function POST({ request }) {
   
    const data = await request.json()
    try {
        // UserAllowedResources to add
        let document = {}

        if (!data.user_id && (!data.video_id || !data.books_id || !data.article_id) ){
            throw new Error("please fill all details")           
        }

        document['user_id'] = data.user_id
        if (data['video_id']) document['video_id'] = data.video_id
        else document['video_id'] = data.video_id

        if (data['books_id']) document['books_id'] = data.books_id
        else document['books_id'] = data.books_id
        
        if (data['article_id']) document['article_id'] = data.article_id
        else document['article_id'] = data.article_id
        

        await connect()

        // add the UserAllowedResources to collection
        const newUserAllowedResources = await UserAllowedResources.create(document)

        return new Response(JSON.stringify(
            { success: true, message: "UserAllowedResources added succesfully" }
        ))
    } catch (e) {
        return new Response(JSON.stringify(
            {status: 401, message: e.message}
        ))
    }
   
}
