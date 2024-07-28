import connect from '$lib/database/connection'
import EBooks from '$lib/database/EBooks'

export async function POST({ request }) {
   
    const data = await request.json()
    try {
        // EBooks to add
        let document = {}

        if (!data.name || !data.content || !data.photoURL || !data.content || !data.description || !data.indexContent || !data.price || !data.language) {
            throw new Error("please fill all details")           
        }

        document['name'] = data.name
        document['content'] = data.content
        document['language'] = data.language
        document['photoURL'] = data.photoURL
        document['description'] = data.description
        document['indexContent'] = data.indexContent
        document['price'] = data.price
        
        if (data['status']) document['status'] = data['status']
        if (data['created_at']) document['created_at'] = data['created_at']
        if (data['tags']) document['tags'] = data['tags']

        await connect()

        // add the EBooks to collection
        const newEBooks = await EBooks.create(document)

        return new Response(JSON.stringify(
            { success: true, message: "EBooks added succesfully" }
        ))
    } catch (e) {
        return new Response(JSON.stringify(
            {status: 401, message: e.message}
        ))
    }
   
}


export async function GET({ url }) {
  
    let urlParam = ''
    
    const query = url.searchParams.get('query');
    if (query) urlParam = 'query'
    
    const price = Number(url.searchParams.get('price'))
    if (price) urlParam = 'price'
    
    const id = (url.searchParams.get('id'))
    if(id) urlParam = 'id'

    try {
        await connect(); // Establish MongoDB connection
        // Case-insensitive regex pattern
        const regex = new RegExp(query, 'i'); // Case-insensitive regex pattern

        let eBooks

        switch (urlParam) {
            case 'id':
                eBooks = await EBooks.find({ _id: id })
                break;
            case 'price':
                eBooks = await EBooks.find({price:price})
                break;
            case 'query':
                eBooks = await EBooks.find({ name: { $regex: regex } })
                break;
            default:
                eBooks = await EBooks.find()
                break;
        }
      
   
        return new Response(JSON.stringify(eBooks));


    } catch (error) {
        console.error('Error fetching eBooks:', error);
        return new Response(JSON.stringify({ status: 401, message: error.message }), {
            headers: {
                'Content-Type': 'application/json'
            },
            status: 401
        });
    }
}





