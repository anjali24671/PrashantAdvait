import connect from '$lib/database/connection'
import Carts from '$lib/database/Carts'

export async function POST({ request }) {
   
    const data = await request.json()
    try {
        // cart to add
        let document = {}
        
        if (!data.user_id || !data.type ) {
            throw new Error("please fill all details")           
        }

        document['user_id'] = data.user_id
        document['type'] = data.type
        if (data.book_id) document['book_id'] = data.book_id
        if (data.Ebook_id) document['EBook_id'] = data.Ebook_id
        if (data.video_id) document['video_id'] = data.video_id

        await connect()

        // add the Cart to collection
        const newCart =await Carts.create(document)

        return new Response(JSON.stringify(
            { success: true, message: "Cart added succesfully" }
        ))
    } catch (e) {
        return new Response(JSON.stringify(
            {status: 401, message: e.message}
        ))
    }
   
}
