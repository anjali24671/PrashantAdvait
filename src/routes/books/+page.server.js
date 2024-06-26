import Books from "$lib/database/Books";
import connect from "$lib/database/connection";
async function loadBestSellers() {
    try {
        await connect();
        const BSResponse = await Books.find().sort({ number_of_orders: -1 }).limit(5);
        return BSResponse; // Return the plain object
    } catch (err) {
        console.error('Failed to load best sellers:', err);
        return { status: 401, message: err.message }; // Return error object directly
    }
}

async function loadCategories(categories) {
    try {
        await connect();
        let loadCategories = {};
        for (let cat of categories) {
            let loadCategoryResponse = await Books.find({ tags: cat });
            loadCategories[cat] = loadCategoryResponse;
        }
        return loadCategories; // Return the plain object
    } catch (err) {
        console.error('Failed to load categories:', err);
        return { status: 401, message: err.message }; // Return error object directly
    }
}

async function loadNewRelease() {
    try {
        await connect();
        const newRelease = await Books.find().sort({ created_at: -1 }).limit(5);
        return newRelease; // Return the plain object
    } catch (err) {
        console.error('Failed to load new releases:', err);
        return { status: 401, message: err.message }; // Return error object directly
    }
}



export async function load() {
    try {
        const newReleaseResponse = await loadNewRelease();
        const categories = ['bhagwat gita', 'ego', 'clarity'];
        const loadCategoriesResponse = await loadCategories(categories);
        const loadBestSellersResponse = await loadBestSellers();

        return {
                newRelease: JSON.stringify(newReleaseResponse), // Serialize to JSON
                newCategories: JSON.stringify(loadCategoriesResponse), // Serialize to JSON
                loadBestSeller: JSON.stringify(loadBestSellersResponse) // Serialize to JSON
        };
    } catch (e) {
        console.error('Failed to load data:', e);
        return {
            status: 401,
            message: e.message
        };
    }
}