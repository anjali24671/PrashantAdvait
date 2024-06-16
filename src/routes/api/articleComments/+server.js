import connect from '$lib/database/connection'
import ArticleComments from '$lib/database/ArticleComments'

export async function POST({ request }) {
   
    const data = await request.json()
    try {
        // data to add
        let document = {}
        
        if (!data.articleId || !data.content) {
            throw new Error("articleId and content is required")           
        }
        document['articleId'] = data.articleId
        document['content'] = data.content
        if (!data.status) document['status'] = 'active'
        else document['status'] = data.status

        await connect()

        // add the user to collection
        const newArticleComments =await ArticleComments.create(document)

        return new Response(JSON.stringify(
            { success: true, message: "comment added succesfully" }
        ))
    } catch (e) {
        return new Response(JSON.stringify(
            {status: 401, message: e.message}
        ))
    }
   
}
