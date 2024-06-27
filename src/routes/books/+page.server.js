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
                bookForPrice["price"] = book.price

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

async function loadCategories(categories) {
    const lifeProblemTags = ['depression and anxiety', 'money', 'fear', 'suffering', 'lonliness', 'personality', 'success', 'desire', 'emotions', 'anger', 'goal', 'attachment', 'concentration']
    const spiritualWisomTags = ['ramayan', 'advait', 'shri ramchandra manas', 'renunciation', 'saint kabir', 'meditation', 'ashtavakra gita', 'chhandogya upanishad', 'karma', 'bhagawat gita', 'purana']
    const veganismTags = ['animal cruelity', 'population', 'climate change', 'liberation', "ego"]
    try {
        await connect()
        
        const lifeProblemCategoryResponse = await EBooks.find({ tag: { $in: lifeProblemTags } })
        const spiritualWisdomResponse = await EBooks.find({ tag: { $in: spiritualWisomTags } })
        const veganismResponse = await EBooks.find({tag:{ $in: veganismTags}})

        let loadCategories = {}
        // find the corresponding paperback price, use name to refer to another collection
        let bookPrice = []
        for (let ebook of lifeProblemCategoryResponse) {
            // take its name, and search the corresponding price in BOOK table.
            // Add paperPrice to bookPrice for that name
            const book = await Books.findOne({ name: ebook.name }, { price: 1, _id: 0 })
            
            if (book) {
                let bookForPrice = {}
                bookForPrice["name"] = ebook.name
                bookForPrice["price"] = book.price

                bookPrice.push(bookForPrice)
            } 
            
        }
       
        for (let ebook of spiritualWisdomResponse) {
            // take its name, and search the corresponding price in BOOK table.
            // Add paperPrice to bookPrice for that name
            const book = await Books.findOne({ name: ebook.name }, { price: 1, _id: 0 })
            
            if (book) {
                let bookForPrice = {}
                bookForPrice["name"] = ebook.name
                bookForPrice["price"] = book.price

                bookPrice.push(bookForPrice)
            } 
            
        }
        for (let ebook of veganismResponse) {
            // take its name, and search the corresponding price in BOOK table.
            // Add paperPrice to bookPrice for that name
            const book = await Books.findOne({ name: ebook.name }, { price: 1, _id: 0 })
            
            if (book) {
                let bookForPrice = {}
                bookForPrice["name"] = ebook.name
                bookForPrice["price"] = book.price

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
                bookForPrice["price"] = book.price

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
    try {
        const newReleaseResponse = await loadNewRelease();
        const categories = ['bhagwat gita', 'ego', 'clarity'];
        const loadCategoriesResponse = await loadCategories(categories);
        const loadBestSellersResponse = await loadBestSellers();

        const newRelease = await newReleaseResponse.json()
        const newCategories = await loadCategoriesResponse.json()
        const loadBestSeller = await loadBestSellersResponse.json()
       
     

        return {
            newRelease,
            newCategories, 
            loadBestSeller
        };
    } catch (e) {
        console.error('Failed to load data:', e);
        return {
            status: 401,
            message: e.message
        };
    }
}