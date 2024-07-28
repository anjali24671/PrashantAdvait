import search from '../../utils/search';

export async function load({ url }) {
    
    const query = url.searchParams.get('query')
   
    const booksData = await search(query, "book");
    console.log("//////////////////////////////////////////////////////////////")
    console.log(booksData)

    return {
        booksData
    }
        
}