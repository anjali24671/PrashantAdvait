import Books from '$lib/database/Books.js'
import connect from '$lib/database/connection.js'
import EBooks from '$lib/database/EBooks.js'


export async function load({ params }) {

    try {
        await connect()
        // get the data for the book whose _id is in the params
        const ebook_id = params.book_id

        const EbookResponse = await EBooks.find({ _id: ebook_id })
        console.log(EbookResponse)

        let bookPrice = []
        for (let ebook of EbookResponse) {
            // take its name, and search the corresponding price in BOOK table.
            // Add paperPrice to bookPrice for that name
            const book = await Books.findOne({_id:ebook_id }, { price: 1, _id: 0 })
            
            if (book) {
                let bookForPrice = {}
                bookForPrice["name"] = ebook.name
                bookForPrice["price"] = book.price

                bookPrice.push(bookForPrice)
            } 
            
        }
        

        const book = await EbookResponse.json()
        return {
            book,
            
        }

    } catch (e) {
        return {
            status: 401,
            message: e.message
        }
    }

}