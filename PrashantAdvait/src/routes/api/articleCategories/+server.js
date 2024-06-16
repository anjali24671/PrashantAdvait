import connect from '$lib/database/connection'
import ArticleCategories from '$lib/database/ArticleCategories'

export async function POST({ request }) {
    console.log(request.body)
    const data = await request.json()
    try {
        // data to add
        let document = {}
        if (data.name) document['name'] = data.name
        else throw new Error("name is required")
        if (data.numberOfArticles) document['numberOfArticles'] = data.numberOfArticles
        if (data.status) document['status'] = data.status

        await connect()

        // add the user to collection
        const newArticleCategory =await ArticleCategories.create(document)

        return new Response(JSON.stringify(
            { success: true, message: "user created succesfully" }
        ))
    } catch (e) {
        return new Response(JSON.stringify(
            {status: 401, message: e.message}
        ))
    }
   
}

