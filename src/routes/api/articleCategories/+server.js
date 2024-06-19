import connect from '$lib/database/connection'
import ArticleCategories from '$lib/database/ArticleCategories'


export async function POST({ request }) {
    console.log(request.body)
    const data = await request.json()

    let document = {}
    if (!data.name || !data.level_of_difficulty ) {
        throw new Error("fill all details")
     }
    try {
        // data to add
        
        document['name'] = data.name
        if(data.numberOfArticles) document['numberOfArticles'] = data.numberOfArticles
        document['level_of_difficulty'] = data.level_of_difficulty
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

