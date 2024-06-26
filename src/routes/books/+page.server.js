import Books from "$lib/database/Books"
import connect from "$lib/database/connection"
import EBooks from "$lib/database/EBooks"

async function loadBestSellers() {
    try {
        await connect()
        // array of object (eBook)
        const EBKresponse = await EBooks.find().sort({ number_of_orders: -1 }).limit(5)
        

        // find the corresponding paperback price, use name to refer to another collection
        let bookPrice = []
        for (let ebook of EBKresponse) {
            // take its name, and search the corresponding price in BOOK table.
            // Add paperPrice to bookPrice for that name
            const book = await Books.findOne({ name: ebook.name }, { price: 1, _id: 0 })
            
            if (book) {
                let bookForPrice = {}
                bookForPrice["name"] = ebook.name
                bookForPrice["price"] = ebook.price

                bookPrice.push(bookForPrice)
            } 
            
        }
        
        return new Response(JSON.stringify({EBKresponse, bookPrice}), {
            headers:{'Content-type': 'application/json'},
        })
    } catch (e) {
        console.log(e)
        return new Response(JSON.stringify({ status: 401, message: e.message }), {
            headers: { 'Content-Type': 'application/json' },
        });    }
}

async function loadCategories() {
    try {
        await connect()
        const loadCategoryResponse = await EBooks.find({ tags: "clarity" })

        
        // find the corresponding paperback price, use name to refer to another collection
        let bookPrice = []
        for (let ebook of loadCategoryResponse) {
            // take its name, and search the corresponding price in BOOK table.
            // Add paperPrice to bookPrice for that name
            const book = await Books.findOne({ name: ebook.name }, { price: 1, _id: 0 })
            
            if (book) {
                let bookForPrice = {}
                bookForPrice["name"] = ebook.name
                bookForPrice["price"] = ebook.price

                bookPrice.push(bookForPrice)
            } 
            
        }

        return new Response(JSON.stringify({loadCategoryResponse, bookPrice}), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (e) { 
        return new Response(JSON.stringify({ status: 401, message: e.message }), {
            headers: { 'Content-Type': 'application/json' },
        });
    }
}


async function loadNewRelease() {

    try {
        await connect()
        const newRelease = await EBooks.find().sort({ created_at: -1 }).limit(5)

         
        // find the corresponding paperback price, use name to refer to another collection
        let bookPrice = []
        for (let ebook of newRelease) {
            // take its name, and search the corresponding price in BOOK table.
            // Add paperPrice to bookPrice for that name
            const book = await Books.findOne({ name: ebook.name }, { price: 1, _id: 0 })
            
            if (book) {
                let bookForPrice = {}
                bookForPrice["name"] = ebook.name
                bookForPrice["price"] = ebook.price

                bookPrice.push(bookForPrice)
            } 
            
        }

       
        return new Response(JSON.stringify({newRelease, bookPrice}), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) { 
        return new Response(JSON.stringify({ status: 401, message: e.message }), {
            headers: { 'Content-Type': 'application/json' },
        });
    }
    
}



export async function load() {
    const newReleaseRespose = await loadNewRelease()
    const loadCategoriesResponse = await loadCategories()
    const loadBestSellersResponse = await loadBestSellers()
    const loadBestSeller = await loadBestSellersResponse.json()
    const newRelease = await newReleaseRespose.json()
    const newCategories = await loadCategoriesResponse.json()
 
    return {
        newRelease,
        newCategories,
        loadBestSeller
    }
}