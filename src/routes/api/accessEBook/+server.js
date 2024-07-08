import connect from '$lib/database/connection'
import AccessEBook from '$lib/database/AccessEBook.js'
import EBooks from '$lib/database/EBooks.js'


export async function POST({ request }) {
   
    const data = await request.json()

    let document = {}
    if (!data.user_id || !data.ebook_id ) {
        throw new Error("fill all details")
     }
    try {
       
        document['user_id'] = data.user_id
        document['ebook_id'] = data.ebook_id
       
        await connect()

        // add the user to collection
        const newAccessEBook =await AccessEBook.create(document)

        return new Response(JSON.stringify(
            { success: true, message: "access to ebook given succesfully" }
        ))
    } catch (e) {
        return new Response(JSON.stringify(
            {"status": 401, message: e.message}
        ))
    }
   
}



export async function GET({ url }) {
    const user_id = url.searchParams.get('user_id');
   

    try {

        await connect()

        // get books for user_id
        const books = await AccessEBook.find({user_id:user_id})
        
        // get the ebooks with id received in the above code
        let eBookData = []
        for (let book of books) {
            const id = book.ebook_id
            const eBooks = await EBooks.find({_id:id})
            eBookData.push(eBooks)          
        }

        return new Response(JSON.stringify(eBookData));


    } catch (error) {
        console.error('Error getting My books', error);
        return new Response(JSON.stringify({ "status": 401, message: error.message }), {
            headers: {
                'Content-Type': 'application/json'
            },
            status: 401
        });
    }
}







