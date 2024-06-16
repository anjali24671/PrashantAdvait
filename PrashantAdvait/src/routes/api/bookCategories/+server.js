import connect from '$lib/database/connection'
import BookCategories from '$lib/database/BookCategories'

export async function POST({ request }) {
    const data = await request.json()
    try {
        // book category to add
        let document = {}
        if (!data.name) {
            throw new Error("name is required")
        }
        document['name'] = data.name
        if (data['numberOfBooks']) document['numberOfBooks'] = data.views
        if (data['status']) document['status'] = data.status

        await connect()

        // add the book category to collection
        const newBookCategories =await BookCategories.create(document)

        return new Response(JSON.stringify(
            { success: true, message: `Book category ${data.name} added succesfully` }
        ))
    } catch (e) {
        return new Response(JSON.stringify(
            { status: 401, message: e.message }
        ))
    }

}
