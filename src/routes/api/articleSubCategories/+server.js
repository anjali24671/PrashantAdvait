import connect from '$lib/database/connection'
import ArticleSubCategories from '$lib/database/ArticleSubCategories.js'

export async function POST({ request }) {
   console.log("hello")
    const data = await request.json()
    try {
        // ArticleSubCategories to add
        let document = {}

        if (!data.name || !data.category_id ) {
            console.log("add all details")
            throw new Error("please fill all details")
        }

        document['name'] = data.name
        document['category_id'] = data.category_id
        if(data.numberOfArticles) document['numberOfArticles'] = data.numberOfArticles
        
        if (data.status) document['status'] = data.status 
        

        await connect()

        // add the ArticleSubCategories to collection
        const newArticleSubCategories = await ArticleSubCategories.create(document)

        return new Response(JSON.stringify(
            { success: true, message: "ArticleSubCategories added succesfully" }
        ))
    } catch (e) {
        return new Response(JSON.stringify(
            {status: 401, message: e.message}
        ))
    }
   
}
