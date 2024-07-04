import Books from '$lib/database/Books.js'
import connect from '$lib/database/connection.js'
import EBooks from '$lib/database/EBooks.js'


export async function load({ params }) {

    try {
        await connect()
        // get the data for the book whose _id is in the params
        const ebook_id = params.book_id

        const EbookResponse = await EBooks.find({ _id: ebook_id })

        // let bookCol = []
        // for (let ebook of EbookResponse) {

            let newBook={}
            // take its name, and search the corresponding price in BOOK table.
            // Add paperPrice to bookPrice for that name
            const bookres = await Books.findOne({ _id: EbookResponse[0]._id }, { price: 1, _id: 1 })
            
            newBook['name'] = EbookResponse[0].name
            newBook['price'] = EbookResponse[0].price
            newBook['id'] = EbookResponse[0]._id
            newBook['photoURL'] = EbookResponse[0].photoURL
            newBook['language'] = EbookResponse[0].language
            newBook['description'] = EbookResponse[0].description
            
        
            if (bookres) {
                newBook['paperPrice'] = bookres.price
                newBook['paperID'] = bookres._id
              
        } 
        
        const book = await JSON.stringify(newBook)
        return {
           book            
        }

    } catch (e) {
        return {
            status: 401,
            message: e.message
        }
    }

}