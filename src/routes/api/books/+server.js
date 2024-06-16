import connect from '$lib/database/connection'
import Books from '$lib/database/Books'

export async function POST({ request }) {
    const data = await request.json()
    try {
        // book to add
        let document = {}

        if (!data.name || !data.categoryId || !data.photoURL || !data.printLength|| !data.EBookPrice || !data.paperBookPrice || !data.stocks ) {
            throw new Error("please fill all details")
        }

        document['name'] = data.name
        document['categoryId'] = data.categoryId
        document['photoURL'] = data.photoURL
        document['printLength'] = data.printLength
        document['EBookPrice'] = data.EBookPrice
        document['paperBookPrice'] = data.paperBookPrice
        document['stocks'] = data.stocks
        if (data['description']) document['description'] = data.description
        if (data['number_of_orders']) document['number_of_orders'] = data.number_of_orders
        if (data['indexContent']) document['indexContent'] = data.indexContent
        if (data['status']) document['status'] = data.status
        document['created_at'] = data.created_at

        await connect()

        // add the book to collection
        const newBooks = await Books.create(document)

        return new Response(JSON.stringify(
            { success: true, message: `Book ${data.name} added succesfully` }
        ))
    } catch (e) {
        return new Response(JSON.stringify(
            { status: 401, message: e.message }
        ))
    }

}
