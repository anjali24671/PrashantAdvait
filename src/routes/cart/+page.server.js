import connect from "$lib/database/connection";
import Carts from "$lib/database/Carts";


  

export async function load({fetch}) {
    try {
        await connect()
        const cartsResponse = await Carts.find()
        let cartData = {}

        let books = []
        let ebooks = []
        for (let product of cartsResponse) {
            if (product.type === "book") {    
                const bookDataRes = await fetch(`api/books?id=${product.product_id}`) 
                const bookData = await bookDataRes.json()
                books.push(bookData)
                
            }
            if (product.type === "eBook") {
                const bookDataRes = await fetch(`api/eBooks?id=${product.product_id}`) 
                const bookData = await bookDataRes.json()
                ebooks.push(bookData)            }
            
        }

        cartData['book'] = books
        cartData['eBook'] = ebooks
      
        
        return {
            cartData
        }
        
    } catch (err) {
        console.log(err)
        }
}