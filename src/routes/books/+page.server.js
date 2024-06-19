import Books from "$lib/database/Books"
import connect from "$lib/database/connection"

async function loadBestSellers() {
    try {
        await connect()
        const BSResponse = await Books.find().sort({ number_of_orders: -1 }).limit(5)
        
        return new Response(JSON.stringify(BSResponse), {
            headers:{'Content-type': 'application/json'},
        })
    } catch (err) {
        return new Response(JSON.stringify({ status: 401, message: e.message }), {
            headers: { 'Content-Type': 'application/json' },
        });    }
}

async function loadCategories() {
    try {
        await connect()
        const loadCategoryResponse = await Books.find({ tags: "clarity" })
       
        return new Response(JSON.stringify(loadCategoryResponse), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) { 
        return new Response(JSON.stringify({ status: 401, message: e.message }), {
            headers: { 'Content-Type': 'application/json' },
        });
    }
}


async function loadNewRelease() {

    try {
        await connect()
        const newRelease = await Books.find().sort({ created_at: -1 }).limit(5)
       
        return new Response(JSON.stringify(newRelease), {
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