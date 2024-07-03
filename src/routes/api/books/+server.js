import connect from '$lib/database/connection'
import Books from '$lib/database/Books'

export async function POST({ request }) {
    const data = await request.json()
    try {
        // book to add
        let document = {}

        if (!data.name || !data.photoURL || !data.printLength||  !data.price || !data.stocks || !data.language || !data.indexContent) {
            throw new Error("please fill all details")
        }

        document['name'] = data.name
        document['photoURL'] = data.photoURL
        document['printLength'] = data.printLength
       
        document['price'] = data.price
        document['stocks'] = data.stocks
        document['language'] = data.language
        if (data['description']) document['description'] = data.description
        if (data['number_of_orders']) document['number_of_orders'] = data.number_of_orders
        document['indexContent'] = data.indexContent
        if (data['status']) document['status'] = data.status
        if(data['created_at']) document['created_at'] = data.created_at
        document['tags'] = data.tags

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




export async function GET({ url }) {
    const query = url.searchParams.get('query');
    const price = Number(url.searchParams.get('price'))

    try {
        await connect(); // Establish MongoDB connection
        // Case-insensitive regex pattern
        const regex = new RegExp(query, 'i'); // Case-insensitive regex pattern

        let books
        if (query) {
             books = await Books.find({ name: { $regex: regex } })
        }
        if (price) {
    
            books = await Books.find({price:price})
        }
        else {
             books = await Books.find()
        }
        

        
        return new Response(JSON.stringify(books));


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





